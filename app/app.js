var angular = require('node_modules/angular/angular.min.js'),
    quotesModule = require('./quotes/quotes.js');

angular.module('systemjs-example', [
  quotesModule.name
]);
