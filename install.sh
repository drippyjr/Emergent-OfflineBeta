#!/bin/bash

# Emergent Desktop App - Installation Script
# This script extracts and sets up the Emergent.sh desktop application

echo "🚀 Emergent Desktop App - Installation Script"
echo "=============================================="

# Check if tar.gz file exists
if [ ! -f "emergent-desktop-app.tar.gz" ]; then
    echo "❌ emergent-desktop-app.tar.gz not found!"
    echo "Please make sure the archive file is in the same directory as this script."
    exit 1
fi

# Extract the archive
echo "📦 Extracting Emergent Desktop App..."
tar -xzf emergent-desktop-app.tar.gz

# Navigate to the extracted directory
cd emergent-desktop-app

# Make the launch scripts executable
chmod +x start-app.sh
chmod +x start-app.bat

echo "✅ Installation completed successfully!"
echo ""
echo "🎯 To launch the Emergent Desktop App:"
echo ""
echo "On Linux/Mac:"
echo "  cd emergent-desktop-app"
echo "  ./start-app.sh"
echo ""
echo "On Windows:"
echo "  cd emergent-desktop-app"
echo "  start-app.bat"
echo ""
echo "📖 For more information, see README.md in the emergent-desktop-app directory."