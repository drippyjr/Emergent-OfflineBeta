@echo off
REM Emergent Desktop App Launcher for Windows
REM This script runs the Emergent.sh replica as a standalone desktop application

echo 🚀 Starting Emergent Desktop App...
echo =======================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if Yarn is installed
yarn --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Yarn is not installed. Please install Yarn first.
    pause
    exit /b 1
)

REM Navigate to the app directory
cd /d "%~dp0"

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    yarn install
)

REM Build the React app if build folder doesn't exist
if not exist "build" (
    echo 🔨 Building React app...
    yarn build
)

REM Start the Electron app
echo 🎯 Launching Emergent Desktop App...
yarn electron

echo ✨ Emergent Desktop App has been closed.
pause