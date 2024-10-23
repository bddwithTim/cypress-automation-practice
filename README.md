# Cypress Automation Practice


[![Cypress CI](https://github.com/bddwithTim/cypress-automation-practice/actions/workflows/cypress.yml/badge.svg)](https://github.com/bddwithTim/cypress-automation-practice/actions/workflows/cypress.yml)

This repository contains an automated **end-to-end (e2e) testing** project using Cypress for the test automation practice website: https://testautomationpractice.blogspot.com/. 

## Project Overview

This project demonstrates various automated e2e testing scenarios for the specified web application, including form filling, search functionality, dynamic button interactions, alerts and popups handling, drag and drop operations, and more. All tests are designed to run against the live website, simulating real user interactions in a browser environment.

## Tools and Frameworks

- **Cypress**: Main testing framework (v13.15.0)
- **Node.js**: JavaScript runtime
- **ESLint**: Linting tool for identifying and reporting on patterns in JavaScript
- **Prettier**: Code formatter
- **Husky**: Git hooks to improve the commit process
- **lint-staged**: Run linters on git staged files
- **Mochawesome**: Test reporter for generating HTML/JSON test reports

## Additional Cypress Plugins

- **@4tw/cypress-drag-drop**: For drag and drop operations
- **cypress-real-events**: For real mouse events simulation

## Project Structure

- `cypress/e2e`: Contains test files
- `cypress/support/pages`: Page Object Models
- `cypress/support/commands.js`: Custom Cypress commands
- `cypress.config.js`: Cypress configuration file
- `cypress/results`: Contains generated test reports

## Key Features

1. Form filling and submission
2. Search functionality testing
3. Dynamic button state changes
4. Alerts and popups handling
5. Drag and drop operations
6. Slider manipulation

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

## Test Reporting

This project uses Mochawesome for generating test reports. After running the tests, you can find the HTML report in the `cypress/results` directory. To view the report:

1. Navigate to the `cypress/results` directory
2. Open the `report.html` file in a web browser

The report provides a detailed overview of test results, including passed and failed tests, test duration, and any error messages.

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
