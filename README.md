# AngularExpressNWTemplate

**AngularExpressNWTemplate** is a basic template for building desktop applications using [NW.js](https://nwjs.io/), [Angular](https://angular.io/), and [Express.js](https://expressjs.com/). It is designed to be a simple and functional starting point for small projects or quick prototypes.

## Features

- **Frontend:** Angular 17 for creating modern and dynamic user interfaces.
- **Backend:** Express.js 4 for managing APIs and server-side logic.
- **Desktop:** NW.js for packaging and running the app as a desktop application.
- Optimized development workflow with predefined commands for building, testing, and running.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [NW.js](https://nwjs.io/) (make sure it's set up if you plan to run or build the desktop app)

## Installation

1. Clone this repository:

```bash
  git clone https://github.com/your_user/angular-express-nw-template.git
  cd angular-express-nw-template
```

2. Install dependencies:

```bash
  npm install
```

## Available Commands

### All

- **Run the app in development mode**:

  ```bash
    npm start
  ```

  Runs the frontend (Angular), backend (Express.js), and desktop app (NW.js) simultaneously.

- **Build the app**:

  ```bash
    npm build
  ```

  Builds the Angular, Express, and NW.js apps for production.

---

### Testing

- **Frontend tests**:

  ```bash
    npm run test:front
  ```

  Runs the tests configured for the Angular frontend.

- **Backend tests**:

  ```bash
    test:back
  ```

  Runs the tests configured for the Express backend.

---

### Building

- **Desktop app building**:

  ```bash
    npm run build:nw
  ```

  Builds the NW.js desktop application.

- **Frontend building**:

  ```bash
    npm run build:front
  ```

  Builds the Angular frontend for production.

- **Backend building**:

  ```bash
    npm run build:back
  ```

  Builds the Express backend using TypeScript.

---

### Starting

- **Desktop app development**:

  ```bash
    npm run start:nw
  ```

  Launches the NW.js desktop application once the frontend is ready.

- **Frontend development**:

  ```bash
    npm run start:front
  ```

  Starts the Angular development server.

- **Backend development**:

  ```bash
    npm run start:back
  ```

  Runs the Express backend server.

## Project Structure

```bash
  angular-express-nw-template
  │
  ├── angular_front/                    # Frontend code (Angular)
  │   ├── src/                          # Source folder for Angular application
  │   │   ├── app/                      # Main application folder
  │   │   │   ├── app.component.html    # Template for the root component
  │   │   │   ├── app.component.scss    # Styles for the root component
  │   │   │   ├── app.component.spec.ts # Unit tests for the root component
  │   │   │   ├── app.component.ts      # Logic for the root component
  │   │   │   ├── app.config.ts         # Configuration file for the app
  │   │   │   └── app.routes.ts         # Routing configuration for the app
  │   │   │
  │   │   ├── assets/                   # Placeholder for application assets
  │   │   │   └── .gitkeep              # Ensures the folder is tracked by Git
  │   │   │
  │   │   ├── favicon.ico               # Favicon for the Angular application
  │   │   ├── index.html                # Main HTML file for the application
  │   │   ├── main.ts                   # Entry point for the Angular application
  │   │   └── styles.scss               # Global styles for the Angular application
  │   │
  │   ├── angular.json                  # Angular workspace configuration
  │   ├── package.json                  # Project dependencies and scripts for the front
  │   ├── tsconfig.app.json             # TypeScript configuration for the Angular application
  │   ├── tsconfig.json                 # Base TypeScript configuration for front
  │   └── tsconfig.spec.json            # TypeScript configuration for Angular tests
  │
  ├── assets/                           # Icons for the launcher
  │   ├── icon-256.ico                  # Icon for Windows (256x256)
  │   ├── icon.icns                     # Icon for macOS
  │   ├── icon.ico                      # Default icon for Windows
  │   └── ico.png                       # PNG version of the icon
  │
  ├── express_back/                     # Backend code (Express)
  │   ├── tsconfig.back.ts              # TypeScript configuration for the backend
  │   ├── jest.config.js                # Config test back
  │   ├── package.json                  # Project dependencies and scripts for the back
  │   ├── server.spec.ts                # Main server file test
  │   ├── server.ts                     # Main server file
  │   ├── tsconfig.back.json            # Base TypeScript configuration for back
  │   └── tsconfig.spec.json            # TypeScript configuration for back tests
  │
  ├── .editorconfig                     # Editor configuration for consistent coding styles
  ├── .gitignore                        # Specifies files and directories to be ignored by Git
  ├── package.json                      # Project dependencies and scripts
  ├── package.nw.json                   # NW.js configuration
  ├── README.md                         # Documentation for the project
  └── wait-on.config.json               # Configuration for the wait-on tool
```

## Note

This template is provided as-is. Feel free to download it and use it as a starting point for your projects.
