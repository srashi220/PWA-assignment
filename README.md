# PWA-assignmnet
PWA assignment with installability , offline support and push notification


Steps to register service worker
1. Install the PWA Plugin
Use vite-plugin-pwa to easily integrate service worker support into your Vite project.

2. Configure Vite to Use the Plugin
In vite.config.js, add and configure the plugin to register a service worker automatically.

3. Create manifest.json in public/
This file defines your app's install metadata like name, icons, start URL, and display mode.

4. Link the Manifest in index.html
Add a <link rel="manifest"> tag  in the index.html <head>.

5. Build and Preview the App
Build your project with Vite and preview it locally to simulate production behavior,using cmd npm run build

6. Verify Service Worker Registration
npm run preview
Open Chrome DevTools → Application tab to check if the service worker is active and the PWA is installable.

Steps to configure manifest.json

1. Create the manifest.json File
    In your project, create a manifest.json file inside the public/ directory. This file will define how your Progressive Web App (PWA) behaves when installed.
    Define Metadata inside the manifest.json, include key properties for your app:
        name: Full name of your app (e.g., "PWA-App").
        short_name: A shortened version of the app name (e.g., "PWA").
        description: A brief description of the app (e.g., "This app is made using tailwind css").
        theme_color: Color for the browser toolbar and the app's theme (e.g., "#006A71").
        background_color: The background color of the splash screen (e.g., "#ffffff").
        display: The display mode of the app, usually standalone (so it runs like a native app).
        orientation: Set to portrait to lock the app in portrait mode.
        start_url: The URL the app should open to when launched (typically / for the homepage).
2. Add Icons
    Define icons in different sizes for the app's installation prompt:
        192x192 and 512x512 icons for various platforms and resolutions.

3.Link manifest.json in index.html
   Inside the <head> of your index.html, link to the manifest.json and set the theme-color for a unified look:
   <link rel="manifest" href="/manifest.json" />
   <meta name="theme-color" content="#006A71" />



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
ce137e3 (Initial commit)
e208b59 (Initial commit)
