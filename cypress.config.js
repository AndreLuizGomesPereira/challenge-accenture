const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    projectId: "hu2wfm",
    specPattern: "cypress/integration/e2e/*.feature",
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 8000,
    baseUrl: "http://sampleapp.tricentis.com/101/app.php",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
