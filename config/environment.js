/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'start-app',
    environment: environment,
    baseURL: null,
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
    'default-src': "'none'",
    'script-src': "http://localhost:4200 http://search.railyatri.in",
    'font-src': "http://localhost:4200",
    'connect-src': "http://localhost:4200",
    'img-src': " http://localhost:4200",
    'style-src': " http://localhost:4200",
    'media-src': "http://localhost:4200"
  }

  };

  

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
