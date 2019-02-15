(function() {
  function routes($stateProvider) {
    var todos = {
      name: "todos",
      url: "/todos",
      component: "todosComponent"
    };
    var features = {
      name: "features",
      url: "/features",
      component: "featuresComponent"
    };

    $stateProvider.state(todos);
    $stateProvider.state(features);
  }
  angular.module("TodosApp").config(routes);
})();
