const { defineConfig } = require('cypress');

module.exports = defineConfig({
	defaultCommandTimeout: 30000,
	requestTimeout: 80000,
	pageLoadTimeout: 80000,
	e2e: {
		video: true,
		reporter: 'cypress-mochawesome-reporter',
		baseUrl: 'https://app-portalautomatizadosec4-prd.azurewebsites.net/',
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
		},
	},
});
