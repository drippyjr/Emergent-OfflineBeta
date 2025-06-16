#!/bin/bash

# Emergent Desktop App Launcher
# This script runs the Emergent.sh replica as a standalone desktop application

echo "🚀 Starting Emergent Desktop App..."
echo "======================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if Yarn is installed
if ! command -v yarn &> /dev/null; then
    echo "❌ Yarn is not installed. Please install Yarn first."
    exit 1
fi

# Navigate to the app directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    yarn install
fi

# Build the React app if build folder doesn't exist
if [ ! -d "build" ]; then
    echo "🔨 Building React app..."
    yarn build
fi

# Start the Electron app
echo "🎯 Launching Emergent Desktop App..."
yarn electron

echo "✨ Emergent Desktop App has been closed."