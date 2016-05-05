System.config({
  paths: {
    'app/*': 'app/*'
  },
  meta: {
    // meaning [baseURL]/vendor/angular.js when no other rules are present
    // path is normalized using map and paths configuration
    'node_modules/angular/angular.min.js': {
      format: 'global', // load this module as a global
      exports: 'angular', // the global property to take as the module value
      deps: [
        // dependencies to load before this module
      ]
    }
  }
});
