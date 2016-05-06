var angular = require('angular'),
    quotesModule = require('./quotes/quotes.js');

angular.module('systemjs-example', [
  quotesModule.name
]);
