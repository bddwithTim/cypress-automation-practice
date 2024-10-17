import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    baseUrl: "https://testautomationpractice.blogspot.com/",
    watchForFileChanges: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: false,
      json: true,
    },
  },
  screenshotsFolder: "cypress/screenshots",
});
