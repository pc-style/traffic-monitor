#!/bin/bash

# Installation script for ctx command

set -e

# Get the current directory (where the project is located)
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🔧 Installing ctx command..."
echo "📁 Project directory: $PROJECT_DIR"

# Default installation directory
INSTALL_DIR="$HOME/bin"

# Allow user to specify different installation directory
if [ $# -eq 1 ]; then
    INSTALL_DIR="$1"
fi

echo "📦 Installation directory: $INSTALL_DIR"

# Create installation directory if it doesn't exist
mkdir -p "$INSTALL_DIR"

# Create the ctx script with the correct PROJECT_DIR
cat > "$INSTALL_DIR/ctx" << EOF
#!/bin/bash

# ctx - Context7 Documentation Gatherer CLI wrapper
# This script activates the virtual environment and runs the main.py script

# Absolute path to the project directory (set during installation)
PROJECT_DIR="$PROJECT_DIR"

# Path to the virtual environment and main script
VENV_PATH="\$PROJECT_DIR/venv"
MAIN_SCRIPT="\$PROJECT_DIR/main.py"

# Check if virtual environment exists
if [ ! -d "\$VENV_PATH" ]; then
    echo "❌ Virtual environment not found at: \$VENV_PATH"
    echo "Please run setup first:"
    echo "  cd \$PROJECT_DIR"
    echo "  python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
    exit 1
fi

# Check if main script exists
if [ ! -f "\$MAIN_SCRIPT" ]; then
    echo "❌ Main script not found at: \$MAIN_SCRIPT"
    exit 1
fi

# Check if .env file exists (warn but don't fail)
if [ ! -f "\$PROJECT_DIR/.env" ]; then
    echo "⚠️  Warning: .env file not found. Make sure CONTEXT7_API_KEY is configured."
    echo "   Copy .env.example to .env and add your API key."
fi

# Activate virtual environment and run the script
source "\$VENV_PATH/bin/activate"

# Check if activation was successful
if [ \$? -ne 0 ]; then
    echo "❌ Failed to activate virtual environment"
    exit 1
fi

# Run the main script with all passed arguments
python "\$MAIN_SCRIPT" "\$@"

# Capture the exit code from the Python script
EXIT_CODE=\$?

# Deactivate virtual environment (optional, as the shell will close anyway)
deactivate 2>/dev/null

# Exit with the same code as the Python script
exit \$EXIT_CODE
EOF

# Make the script executable
chmod +x "$INSTALL_DIR/ctx"

echo "✅ ctx installed to $INSTALL_DIR/ctx"

# Check if the installation directory is in PATH
if [[ ":$PATH:" != *":$INSTALL_DIR:"* ]]; then
    echo ""
    echo "⚠️  $INSTALL_DIR is not in your PATH."
    echo "Add this to your ~/.bashrc or ~/.zshrc:"
    echo "  export PATH=\"$INSTALL_DIR:\$PATH\""
    echo ""
    echo "Then run: source ~/.bashrc  # or ~/.zshrc"
else
    echo "✅ $INSTALL_DIR is already in your PATH"
fi

echo ""
echo "🎉 Installation complete! Test it with:"
echo "  ctx --help"
echo "  ctx react --auto"
