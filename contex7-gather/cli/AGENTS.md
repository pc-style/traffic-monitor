# Project Information for AI Agents

## Build/Test/Lint Commands
- **Setup**: `python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt`
- **Run CLI**: `source venv/bin/activate && python main.py <library_name>`
- **Run CLI (auto)**: `source venv/bin/activate && python main.py <library_name> --auto`
- **Test CLI**: `source venv/bin/activate && python main.py --help`
- **Dependencies**: Python 3.13+, virtual environment recommended

## Architecture & Structure
- **Project Type**: Python CLI tool for documentation gathering
- **Root Directory**: `/Users/pcstyle/contex7-gather/cli/`
- **Main Components**:
  - `main.py`: Core CLI application with Context7 and Gemini integrations
  - `requirements.txt`: Python dependencies
  - `.env`: API keys (GEMINI_API_KEY required)
  - `docs/`: Output directory for generated documentation

## Code Style & Conventions
- **Language**: Python 3.13+ with type hints
- **CLI Framework**: Click for command-line interface
- **Error Handling**: Graceful error handling with user-friendly messages
- **File Structure**: Organized output in `docs/{project_name}/{topic}.md`
- **Environment**: Uses python-dotenv for configuration management

## API Integrations
- **Context7**: REST API integration for fetching up-to-date documentation
- **Structured Parser**: Built-in parser for Context7 format (no AI needed)
- **Supported Libraries**: Any library available in Context7's database (dynamic search)

## Development Guidelines
- Virtual environment required for Python dependencies
- Configure CONTEXT7_API_KEY in .env file before use
- Tool outputs structured markdown files organized by library/framework
