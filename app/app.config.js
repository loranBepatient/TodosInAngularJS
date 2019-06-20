(function() {
  angular.module("TodosApp").config(config);

  function config($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }
})();
