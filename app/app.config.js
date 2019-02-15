(function() {
  function routes($stateProvider) {
    var features = {
      name: "features",
      url: "/features",
      component: "featuresComponent"
    };

    $stateProvider.state(features);
  }
  angular.module("TodosApp").config(routes);
})();
