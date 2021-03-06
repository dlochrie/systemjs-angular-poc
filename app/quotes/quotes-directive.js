var QuotesController = require('./quotes-controller.js');


/**
 * The Quotes Directive. Displays a random message each time it is triggered.
 * @return {!angular.Directive} Directive definition object.
 */
module.exports = function() {
  return {
    scope: true,
    restrict: 'A',
    template: '<div class="panel panel-default"><div class="panel-body"><h3>Random Chuck Norris Quote</h3><div class="row"><div class="col-md-2"><button class="btn btn-default" ng-click="quotesCtrl.updateQuote()">Get New Quote!</button></div><div class="col-md-10"><blockquote><p>{{ quote }}</p><footer>Anonymous</footer></blockquote></div></div></div></div>',
    controller: QuotesController,
    controllerAs: 'quotesCtrl'
  };
};
