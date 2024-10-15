import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {},
    baseUrl: "https://testautomationpractice.blogspot.com/",
    watchForFileChanges: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
  },
  screenshotsFolder: "cypress/screenshots",
});
