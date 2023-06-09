const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')
const mongo = require('cypress-mongodb')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    // implement node event listeners here
      config = cypressBrowserPermissionsPlugin(on, config)
      mongo.configurePlugin(on)
      return config

    },
    baseUrl: 'http://localhost:3000/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      "browserPermissions": {
        'geolocation': 'allow',
        'notifications': 'allow'
        },
      mongodb: {
        'uri': 'mongodb+srv://qa:cademy@cluster0.eqzgc2b.mongodb.net/QtruckDB?retryWrites=true&w=majority',
        'database': 'QtruckDB',
        }
    }
  },
});
