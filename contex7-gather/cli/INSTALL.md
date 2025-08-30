# Installation Guide

## Option 1: Automatic Installation (Recommended)

1. **Run the installation script:**
   ```bash
   ./install.sh
   ```

2. **If ~/bin is not in your PATH, add it:**
   ```bash
   echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc  # or ~/.zshrc
   source ~/.bashrc  # or ~/.zshrc
   ```

3. **Now you can use ctx from anywhere:**
   ```bash
   ctx react
   ctx vue --auto
   ctx --help
   ```

## Option 2: Custom Installation Directory

1. **Install to a specific directory:**
   ```bash
   ./install.sh /usr/local/bin  # System-wide installation
   ./install.sh ~/.local/bin    # User-specific alternative location
   ```

## Option 3: Manual Installation

1. **For advanced users who prefer manual setup:**
   ```bash
   # Create the ctx script with correct paths
   mkdir -p ~/bin
   sed "s|PROJECT_DIR=\".*\"|PROJECT_DIR=\"$(pwd)\"|" ctx > ~/bin/ctx
   chmod +x ~/bin/ctx
   ```

## Verification

Test that everything works:
```bash
ctx --help
ctx react --auto
```

## Troubleshooting

- **Command not found**: Make sure ~/bin or /usr/local/bin is in your PATH
- **Permission denied**: Run `chmod +x ~/bin/ctx` to make it executable
- **Virtual environment not found**: The script automatically detects the venv relative to its location
- **API key missing**: Make sure you have a `.env` file in the original directory with CONTEXT7_API_KEY set
