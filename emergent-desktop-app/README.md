# Emergent Desktop App

A fully offline, standalone desktop version of the Emergent.sh platform that allows you to build applications using natural language prompts.

## 🚀 Features

- **Completely Offline**: Runs without internet connection
- **Native Desktop App**: Built with Electron for Windows, Mac, and Linux
- **Pixel-Perfect Replica**: Exact visual match of the original emergent.sh
- **Interactive Interface**: Fully functional UI with all original features
- **Modern Design**: Dark theme with beautiful animations and effects

## 📋 Requirements

- **Node.js** (version 14 or higher)
- **Yarn** package manager

## 🛠️ Installation & Setup

### Option 1: Quick Start (Recommended)

**For Windows:**
1. Double-click `start-app.bat`
2. The app will automatically install dependencies and launch

**For Mac/Linux:**
1. Open terminal in the app directory
2. Run: `./start-app.sh`
3. The app will automatically install dependencies and launch

### Option 2: Manual Setup

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Build the React app:
   ```bash
   yarn build
   ```

3. Launch the desktop app:
   ```bash
   yarn electron
   ```

## 📦 Building Standalone Executables

To create platform-specific executable files:

```bash
# Build for current platform
yarn dist

# Build for all platforms (Windows, Mac, Linux)
yarn dist-all

# Build for specific platform
yarn dist --linux
yarn dist --win
yarn dist --mac
```

Executables will be created in the `dist/` folder.

## 🎯 Usage

1. Launch the app using one of the methods above
2. Use the main input field to describe what you want to build
3. Browse community examples and projects
4. Interact with all UI elements exactly as on the original website

## 📁 Project Structure

```
emergent-desktop-app/
├── src/                  # React source code
│   ├── App.js           # Main application component
│   ├── components.js    # All UI components
│   └── App.css         # Styling and animations
├── main.js             # Electron main process
├── start-app.sh        # Linux/Mac launcher script
├── start-app.bat       # Windows launcher script
├── package.json        # Dependencies and scripts
└── dist/              # Built executables (after building)
```

## 🔧 Development

To run the app in development mode:

```bash
# Start React dev server and Electron simultaneously
yarn electron-dev
```

## ⚡ Scripts

- `yarn start` - Start React development server
- `yarn build` - Build React app for production
- `yarn electron` - Run Electron app with built React app
- `yarn electron-dev` - Run in development mode
- `yarn dist` - Build platform-specific executable
- `yarn dist-all` - Build executables for all platforms

## 🎨 Features Implemented

✅ **Complete UI Replica**
- Header with navigation
- Hero section with interactive input
- Community showcase with project cards
- Call-to-action section with animated text
- Footer with links

✅ **Interactive Elements**
- Text input functionality
- Hover effects on all buttons and cards
- Category filter buttons
- Responsive design

✅ **Visual Design**
- Dark theme matching original
- Green accent colors with glow effects
- High-quality images from Unsplash
- Smooth animations and transitions

## 🔐 Security Features

- Context isolation enabled
- Node integration disabled
- Web security enforced
- External links open in system browser

## 🐛 Troubleshooting

**App won't start:**
- Ensure Node.js and Yarn are installed
- Run `yarn install` to install dependencies
- Check console for error messages

**Build fails:**
- Update Node.js to latest LTS version
- Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
- Run `yarn build` separately to check for build errors

## 📄 License

This is a replica/clone for educational and demonstration purposes.

---

**Made with ❤️ using React, Electron, and TailwindCSS**

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
