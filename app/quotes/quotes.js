var QuotesController = require('./quotes-controller.js'),
    quotesDirective = require('./quotes-directive.js');


/**
 * Definition for the Quotes module.
 */
module.exports = angular.module('systemjs-example.quotes', []).
    controller('QuotesController', QuotesController).
    directive('quotesGenerator', quotesDirective);
