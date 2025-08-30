#!/usr/bin/env python3
"""
CLI tool to gather documentation from Context7 API and parse it using structured format parsing.
"""

import os
import json
import re
from pathlib import Path
from typing import Dict, List, Optional

import click
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Context7Client:
    """Client for interacting with Context7 REST API."""
    
    def __init__(self):
        self.base_url = "https://context7.com"
        self.session = requests.Session()
        
        # Get API key from environment
        api_key = os.getenv("CONTEXT7_API_KEY")
        if not api_key:
            raise ValueError("CONTEXT7_API_KEY not found in environment variables")
        
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        })
        
    def search_libraries(self, query: str) -> List[Dict]:
        """Search for libraries using the Context7 search API."""
        try:
            url = f"{self.base_url}/api/v1/search"
            params = {"query": query}
            
            response = self.session.get(url, params=params, timeout=30)
            response.raise_for_status()
            
            result = response.json()
            
            # Handle different response formats
            if isinstance(result, dict):
                # If response is a dict, look for common array keys
                if "results" in result:
                    return result["results"]
                elif "libraries" in result:
                    return result["libraries"]
                elif "data" in result:
                    return result["data"]
                else:
                    # If it's a dict but no recognizable array key, wrap it in a list
                    return [result]
            elif isinstance(result, list):
                return result
            else:
                click.echo(f"Unexpected response format: {type(result)}", err=True)
                return []
                
        except requests.RequestException as e:
            click.echo(f"Error searching libraries: {e}", err=True)
            return []
        except (ValueError, KeyError) as e:
            click.echo(f"Error parsing search response: {e}", err=True)
            return []
    
    def resolve_library_id(self, library_name: str, auto_select: bool = False) -> Optional[str]:
        """Resolve library name to Context7 library ID via search API."""
        libraries = self.search_libraries(library_name)
        
        if not libraries or len(libraries) == 0:
            return None
        
        try:
            # Score and rank libraries to prefer official documentation
            scored_libraries = []
            for lib in libraries:
                if not isinstance(lib, dict):
                    continue
                    
                lib_id = lib.get("id", "")
                title = lib.get("title", "").lower()
                description = lib.get("description", "").lower()
                
                score = 0
                
                # Prefer official sources
                official_indicators = ["official", "docs", "documentation", "guide"]
                for indicator in official_indicators:
                    if indicator in lib_id.lower() or indicator in title or indicator in description:
                        score += 10
                
                # Prefer main project repositories/sites
                main_indicators = [f"/{library_name}", f"{library_name}/", f"{library_name}."]
                for indicator in main_indicators:
                    if indicator in lib_id.lower():
                        score += 15
                
                # Prefer higher trust scores if available
                trust_score = lib.get("trustScore", 0)
                if isinstance(trust_score, (int, float)):
                    score += trust_score / 10
                
                # Prefer more stars if available
                stars = lib.get("stars", 0)
                if isinstance(stars, (int, float)):
                    score += min(stars / 1000, 5)  # Cap star bonus at 5 points
                
                scored_libraries.append((score, lib))
            
            # Sort by score (highest first)
            scored_libraries.sort(key=lambda x: x[0], reverse=True)
            
            if scored_libraries:
                if auto_select:
                    # Automatic selection (original behavior)
                    best_match = scored_libraries[0][1]
                    lib_id = best_match.get("id")
                    title = best_match.get("title", "Unknown")
                    
                    click.echo(f"📖 Auto-selected: {title}")
                    click.echo(f"🔗 Library ID: {lib_id}")
                    
                    # Show alternatives if there are multiple good options
                    if len(scored_libraries) > 1:
                        click.echo(f"ℹ️  Found {len(scored_libraries)} alternatives. Use --library-id if you want a different one:")
                        for i, (score, lib) in enumerate(scored_libraries[1:3]):  # Show up to 2 alternatives
                            alt_title = lib.get("title", "Unknown")
                            alt_id = lib.get("id", "")
                            click.echo(f"   • {alt_title} ({alt_id})")
                    
                    return lib_id
                else:
                    # Interactive selection
                    return self._interactive_selection(scored_libraries[:10])  # Show top 10
            else:
                return None
                
        except (IndexError, TypeError, KeyError) as e:
            click.echo(f"Error accessing search results: {e}", err=True)
            return None
    
    def _interactive_selection(self, scored_libraries: List[tuple]) -> Optional[str]:
        """Show library options and let user select interactively."""
        if not scored_libraries:
            return None
        
        click.echo(f"📋 Found {len(scored_libraries)} libraries:")
        click.echo()
        
        for i, (score, lib) in enumerate(scored_libraries, 1):
            title = lib.get("title", "Unknown")
            lib_id = lib.get("id", "")
            description = lib.get("description", "No description")
            stars = lib.get("stars", 0)
            trust_score = lib.get("trustScore", 0)
            
            # Truncate description if too long
            if len(description) > 80:
                description = description[:80] + "..."
            
            click.echo(f"{i:2d}. {title}")
            click.echo(f"    📁 {lib_id}")
            click.echo(f"    📄 {description}")
            if stars or trust_score:
                click.echo(f"    ⭐ Stars: {stars} | Trust: {trust_score}")
            click.echo()
        
        # Get user selection
        while True:
            try:
                choice = click.prompt(
                    f"Select a library (1-{len(scored_libraries)}) or 'q' to quit",
                    type=str,
                    show_default=False
                )
                
                if choice.lower() == 'q':
                    click.echo("❌ Cancelled by user")
                    return None
                
                choice_num = int(choice)
                if 1 <= choice_num <= len(scored_libraries):
                    selected_lib = scored_libraries[choice_num - 1][1]
                    lib_id = selected_lib.get("id")
                    title = selected_lib.get("title", "Unknown")
                    
                    click.echo(f"📖 Selected: {title}")
                    click.echo(f"🔗 Library ID: {lib_id}")
                    return lib_id
                else:
                    click.echo(f"❌ Please enter a number between 1 and {len(scored_libraries)}")
                    
            except ValueError:
                click.echo("❌ Please enter a valid number or 'q' to quit")
            except (KeyboardInterrupt, EOFError):
                click.echo("\n❌ Cancelled by user")
                return None
    
    def get_library_docs(self, library_id: str, topic: Optional[str] = None, tokens: int = 10000) -> Optional[str]:
        """Fetch documentation for a given library ID."""
        try:
            url = f"{self.base_url}/api/v1/{library_id}"
            params = {
                "type": "txt",
                "tokens": tokens
            }
            if topic:
                params["topic"] = topic
                
            response = self.session.get(url, params=params, timeout=30)
            response.raise_for_status()
            
            return response.text
        except requests.RequestException as e:
            click.echo(f"Error fetching docs from Context7: {e}", err=True)
            return None

class Context7Parser:
    """Parser for Context7 structured documentation format."""
    
    def parse_docs(self, docs_content: str, project_name: str) -> Dict[str, str]:
        """Parse Context7 documentation into organized files."""
        # First save the raw documentation
        parsed_docs = {"_raw": docs_content}
        
        # Split by section separators
        sections = docs_content.split("----------------------------------------")
        
        # Group sections by category/topic
        categories = {}
        
        for section in sections:
            section = section.strip()
            if not section:
                continue
                
            # Parse section metadata
            metadata = self._parse_section_metadata(section)
            if not metadata:
                continue
                
            title = metadata.get('title', 'untitled')
            category = self._categorize_section(title, metadata)
            
            # Create markdown content for this section
            markdown_content = self._create_markdown_section(metadata, section)
            
            # Add to category
            if category not in categories:
                categories[category] = []
            categories[category].append(markdown_content)
        
        # Combine sections by category into files
        for category, sections_list in categories.items():
            filename = self.sanitize_filename(category)
            content = f"# {category.replace('-', ' ').title()}\n\n"
            content += "\n\n---\n\n".join(sections_list)
            parsed_docs[filename] = content
            
        return parsed_docs
    
    def _parse_section_metadata(self, section: str) -> Dict[str, str]:
        """Extract metadata from a Context7 section."""
        lines = section.split('\n')
        metadata = {}
        code_lines = []
        in_code = False
        
        for line in lines:
            line = line.strip()
            
            if line.startswith('TITLE:'):
                metadata['title'] = line[6:].strip()
            elif line.startswith('DESCRIPTION:'):
                metadata['description'] = line[12:].strip()
            elif line.startswith('SOURCE:'):
                metadata['source'] = line[7:].strip()
            elif line.startswith('LANGUAGE:'):
                metadata['language'] = line[9:].strip()
            elif line.startswith('CODE:'):
                in_code = True
                continue
            elif in_code:
                code_lines.append(line)
        
        if code_lines:
            # Remove empty lines from start and end
            while code_lines and not code_lines[0]:
                code_lines.pop(0)
            while code_lines and not code_lines[-1]:
                code_lines.pop()
            metadata['code'] = '\n'.join(code_lines)
            
        return metadata
    
    def _categorize_section(self, title: str, metadata: Dict[str, str]) -> str:
        """Categorize a section based on title and metadata."""
        title_lower = title.lower()
        
        # Define category mappings
        if any(keyword in title_lower for keyword in ['install', 'setup', 'getting started', 'quick start']):
            return 'getting-started'
        elif any(keyword in title_lower for keyword in ['api', 'reference', 'methods', 'functions']):
            return 'api-reference'
        elif any(keyword in title_lower for keyword in ['component', 'sfc', 'single-file']):
            return 'components'
        elif any(keyword in title_lower for keyword in ['routing', 'router', 'navigation']):
            return 'routing'
        elif any(keyword in title_lower for keyword in ['state', 'store', 'pinia', 'vuex']):
            return 'state-management'
        elif any(keyword in title_lower for keyword in ['test', 'testing', 'unit test', 'e2e']):
            return 'testing'
        elif any(keyword in title_lower for keyword in ['build', 'deploy', 'production', 'bundler']):
            return 'build-and-deploy'
        elif any(keyword in title_lower for keyword in ['config', 'configuration', 'options']):
            return 'configuration'
        elif any(keyword in title_lower for keyword in ['typescript', 'ts', 'types']):
            return 'typescript'
        elif any(keyword in title_lower for keyword in ['style', 'css', 'styling', 'scoped']):
            return 'styling'
        elif any(keyword in title_lower for keyword in ['composition', 'reactivity', 'ref', 'reactive']):
            return 'composition-api'
        elif any(keyword in title_lower for keyword in ['directive', 'custom directive']):
            return 'directives'
        elif any(keyword in title_lower for keyword in ['plugin', 'extension', 'addon']):
            return 'plugins'
        else:
            return 'guides'
    
    def _create_markdown_section(self, metadata: Dict[str, str], section: str) -> str:
        """Create markdown content for a section."""
        content = []
        
        # Title
        title = metadata.get('title', 'Untitled')
        content.append(f"## {title}")
        
        # Description
        description = metadata.get('description', '')
        if description:
            content.append(f"{description}")
        
        # Source link
        source = metadata.get('source', '')
        if source:
            content.append(f"**Source:** [{source}]({source})")
        
        # Code block
        code = metadata.get('code', '')
        language = metadata.get('language', '')
        if code:
            content.append(f"```{language}")
            content.append(code)
            content.append("```")
        
        return '\n\n'.join(content)
    
    def sanitize_filename(self, filename: str) -> str:
        """Sanitize filename for safe file system usage."""
        # Remove or replace invalid characters
        sanitized = re.sub(r'[<>:"/\\|?*]', '_', filename)
        sanitized = re.sub(r'[^\w\-_.]', '_', sanitized)
        return sanitized.lower()

class DocSaver:
    """Handle saving parsed documentation to files."""
    
    def __init__(self, base_dir: str = "docs"):
        self.base_dir = Path(base_dir)
    
    def save_docs(self, project_name: str, parsed_docs: Dict[str, str]) -> None:
        """Save parsed documentation to organized files."""
        project_dir = self.base_dir / self.sanitize_filename(project_name)
        project_dir.mkdir(parents=True, exist_ok=True)
        
        for filename, content in parsed_docs.items():
            file_path = project_dir / f"{self.sanitize_filename(filename)}.md"
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            click.echo(f"Saved: {file_path}")
    
    def sanitize_filename(self, filename: str) -> str:
        """Sanitize filename for safe file system usage."""
        # Remove or replace invalid characters
        sanitized = re.sub(r'[<>:"/\\|?*]', '_', filename)
        sanitized = re.sub(r'[^\w\-_.]', '_', sanitized)
        return sanitized.lower()

@click.command()
@click.argument('library_name', required=True)
@click.option('--topic', '-t', help='Specific topic to focus on (optional)')
@click.option('--tokens', '-k', default=10000, help='Maximum tokens to fetch (default: 10000)')
@click.option('--output-dir', '-o', default='docs', help='Output directory (default: docs)')
@click.option('--library-id', '-l', help='Use specific Context7 library ID (skips search)')
@click.option('--auto', '-a', is_flag=True, help='Automatically select best matching library')
def gather_docs(library_name: str, topic: Optional[str], tokens: int, output_dir: str, library_id: Optional[str], auto: bool):
    """
    Gather documentation from Context7 API and parse it using structured format parsing.
    
    LIBRARY_NAME: Name of the library/framework to gather docs for (e.g., react, nextjs, vue)
    
    Examples:
      python main.py react                    # Search and show options to select from
      python main.py react --auto             # Search and auto-select best React docs
      python main.py vue --library-id /vuejs/docs  # Use specific library ID
    """
    click.echo(f"🔍 Gathering documentation for {library_name}...")
    
    # Initialize clients
    try:
        context7 = Context7Client()
        parser = Context7Parser()
        saver = DocSaver(output_dir)
    except ValueError as e:
        click.echo(f"❌ Configuration error: {e}", err=True)
        click.echo("Make sure CONTEXT7_API_KEY is set in your .env file")
        return
    
    # Step 1: Resolve library ID (or use provided one)
    if library_id:
        click.echo(f"📋 Using provided library ID: {library_id}")
    else:
        click.echo("📋 Resolving library ID...")
        library_id = context7.resolve_library_id(library_name, auto_select=auto)
        if not library_id:
            click.echo(f"❌ No libraries found for: {library_name}", err=True)
            click.echo("Try searching with different keywords (e.g., 'react', 'next.js', 'vue', 'angular')")
            return
    
    # Step 2: Fetch documentation
    click.echo("📚 Fetching documentation from Context7...")
    docs_content = context7.get_library_docs(library_id, topic, tokens)
    if not docs_content:
        click.echo("❌ Failed to fetch documentation", err=True)
        return
    
    click.echo(f"✅ Fetched {len(docs_content)} characters of documentation")
    
    # Step 3: Parse structured documentation
    click.echo("📝 Parsing structured documentation...")
    parsed_docs = parser.parse_docs(docs_content, library_name)
    if not parsed_docs:
        click.echo("❌ Failed to parse documentation", err=True)
        return
    
    click.echo(f"✅ Parsed into {len(parsed_docs)} files")
    
    # Step 4: Save to files
    click.echo("💾 Saving documentation files...")
    saver.save_docs(library_name, parsed_docs)
    
    click.echo(f"🎉 Documentation successfully gathered and saved to {output_dir}/{library_name}/")

if __name__ == '__main__':
    gather_docs()
