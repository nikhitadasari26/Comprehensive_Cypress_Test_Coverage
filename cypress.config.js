const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'json',
  reporterOptions: {
    output: 'cypress/reports/test-execution-[hash].json'
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3005',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
