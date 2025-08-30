# Context7 Documentation Gatherer

A CLI tool that uses Context7 and Gemini 2.5 Flash Lite APIs to gather and parse documentation, then saves it in an organized file structure.

## Features

- 🔍 Fetches up-to-date documentation from Context7 API
- 🤖 Parses and organizes content using Gemini 2.5 Flash Lite
- 📁 Saves documentation in structured directories (e.g., `docs/react/installation.md`)
- 🎯 Supports topic-specific documentation retrieval

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   ```

3. **Get API key:**
   - **Context7**: Sign up at [context7.com](https://context7.com) to get your API key
   - Add your key to your `.env` file

4. **Install globally (optional):**
   ```bash
   # Copy to local bin for global access
   mkdir -p ~/bin
   cp ctx ~/bin/
   echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc  # or ~/.zshrc
   source ~/.bashrc  # or ~/.zshrc
   
   # Now you can use 'ctx' from anywhere
   ctx react --auto
   ```

## Usage

### Basic usage:
```bash
# If installed globally
ctx react

# Or run directly
python main.py react
```

### Auto-select best match:
```bash
ctx react --auto
```

### With specific topic:
```bash
ctx react --topic "hooks and state management"
```

### Use specific library ID (skip search):
```bash
ctx vue --library-id /vuejs/docs
```

### Customize output directory:
```bash
ctx nextjs --output-dir ./documentation
```

### Limit token usage:
```bash
ctx vue --tokens 5000
```

## Library Support

The tool uses Context7's search API to find libraries dynamically. You can search for any library available in Context7's database by name or keywords. Common examples include:

- `react` - React framework
- `next.js` - Next.js framework  
- `vue` - Vue.js framework
- `angular` - Angular framework
- `express` - Express.js
- `fastapi` - FastAPI Python framework
- `django` - Django Python framework
- `flask` - Flask Python framework
- `mongodb` - MongoDB database
- `supabase` - Supabase backend

## Output Structure

The tool creates a directory structure like:
```
docs/
├── react/
│   ├── installation.md
│   ├── getting-started.md
│   ├── components.md
│   ├── hooks.md
│   └── api-reference.md
└── nextjs/
    ├── setup.md
    ├── routing.md
    └── deployment.md
```

## How it Works

1. **Library Search**: Uses Context7 search API to find matching libraries
2. **Smart Selection**: Automatically prefers official documentation using scoring system
3. **Documentation Fetching**: Retrieves up-to-date docs via Context7 REST API  
4. **AI Parsing**: Uses Gemini 2.5 Flash Lite to organize content into logical files
5. **File Generation**: Saves parsed content as markdown files in organized directories

### Smart Library Selection

The tool automatically scores and ranks search results to prefer:
- Official documentation sites
- Main project repositories  
- Libraries with higher trust scores and stars
- Results that match the library name more precisely

## Error Handling

- Missing API keys will show clear error messages
- Unknown libraries will suggest alternative search terms
- Network errors are handled gracefully with user-friendly messages
- Failed parsing falls back to saving raw documentation

## Contributing

The tool automatically supports any library available in Context7's database through its search API. No manual mapping needed!
