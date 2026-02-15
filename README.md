# Saga Sheet App

A web-based character sheet and management application for the **Star Wars Roleplaying Game Saga Edition**. This application allows users to create, manage, and view character sheets with an integrated rules engine to calculate stats, defenses, and bonuses automatically.

## Features

*   **Character Creation Wizard**: Step-by-step wizard to build a character (Species, Class, Abilities, Skills, Feats, Talents, Equipment).
*   **Automated Rules Engine**: Automatically calculates:
    *   Ability Modifiers
    *   Defenses (Reflex, Fortitude, Will)
    *   Health Points (HP)
    *   Base Attack Bonus (BAB) and Skill Bonuses
*   **Character Management**: Create, View, Edit, and Delete characters.
*   **Active Sheet View**: distinct "Play Mode" for use during game sessions.
*   **GM Section**: Tools for Game Masters to view all characters.
*   **Google Authentication**: Secure sign-in to save your characters to the cloud.
*   **Responsive Design**: Works on desktop and mobile devices.

## Tech Stack

*   **Language**: [TypeScript](https://www.typescriptlang.org/) (Vanilla, no UI framework dependencies)
*   **Bundler**: [Vite](https://vitejs.dev/)
*   **Styling**: [Sass](https://sass-lang.com/) (SCSS)
*   **Backend/Hosting**: [Firebase](https://firebase.google.com/) (Auth, Firestore, Hosting)

## Prerequisites

*   Node.js (v18 or higher recommended)
*   npm

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd saga-sheet-app
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

This project uses Firebase for authentication and database storage. You need to provide your own Firebase configuration keys.

1.  Create a project in the [Firebase Console](https://console.firebase.google.com/).
2.  Enable **Authentication** (Google Provider).
3.  Enable **Firestore Database**.
4.  Create a `.env` file in the root directory (based on `.env.example` if available, or use the template below):

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Running Locally

To start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To build the application for production:

```bash
npm run build
```

The output files will be in the `dist` directory.

## Deployment

The project is configured for Firebase Hosting.

1.  Login to Firebase CLI:
    ```bash
    npx firebase login
    ```

2.  Deploy to Firebase:
    ```bash
    npm run deploy
    ```
    *(This script automatically runs the build step first)*

## Project Structure

*   `src/auth`: Firebase authentication logic.
*   `src/components`: UI components (Wizard, CharacterSheet, etc.).
*   `src/data`: Static rules data (Species, Classes, Feats, etc.).
*   `src/styles`: Global styles and SCSS variables.
*   `src/utils`: Helper functions, including the core `rulesEngine.ts`.
*   `src/main.ts`: Application entry point.
