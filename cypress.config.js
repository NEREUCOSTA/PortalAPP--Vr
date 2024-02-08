const { defineConfig } = require("cypress");


module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 80000,
  pageLoadTimeout: 80000,
  e2e: {
    baseUrl: 'https://app-portalautomatizadosec4-prd.azurewebsites.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
