# Cypress Automation Practice

This repository contains an automated testing project using Cypress for a test automation practice website.

## Project Overview

This project demonstrates various automated testing scenarios for a web application, including form filling, search functionality, dynamic button interactions, alerts and popups handling, drag and drop operations, and more.

## Tools and Frameworks

- **Cypress**: Main testing framework (v13.15.0)
- **Node.js**: JavaScript runtime
- **ESLint**: Linting tool for identifying and reporting on patterns in JavaScript
- **Prettier**: Code formatter
- **Husky**: Git hooks to improve the commit process
- **lint-staged**: Run linters on git staged files

## Additional Cypress Plugins

- **@4tw/cypress-drag-drop**: For drag and drop operations
- **cypress-real-events**: For real mouse events simulation

## Project Structure

- `cypress/e2e`: Contains test files
- `cypress/support/pages`: Page Object Models
- `cypress/support/commands.js`: Custom Cypress commands
- `cypress.config.js`: Cypress configuration file

## Key Features

1. Form filling and submission
2. Search functionality testing
3. Dynamic button state changes
4. Alerts and popups handling
5. Drag and drop operations
6. Slider manipulation
7. Resizable element manipulation

## Scripts

- `npm test`: Run Cypress tests in headed mode
- `npm run cypress`: Open Cypress Test Runner
- `npm run test:headless`: Run Cypress tests in headless mode
- `npm run test:chrome`: Run tests in Chrome browser
- `npm run test:edge`: Run tests in Edge browser
- `npm run test:electron`: Run tests in Electron browser
- `npm run lint`: Run ESLint
- `npm run format`: Run Prettier to format code

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Run tests using one of the scripts mentioned above

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. The configuration can be found in `eslint.config.mjs`.

## Git Hooks

This project uses Husky for Git hooks:

- Pre-commit hook runs linting and formatting on staged files

## Configuration

- ESLint configuration: `eslint.config.mjs`
- Cypress configuration: `cypress.config.js`

## Contributing

Please ensure that all tests pass and the code adheres to the existing style before submitting a pull request.


