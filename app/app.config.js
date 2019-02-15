(function() {
  function routes($stateProvider) {
    var todos = {
      name: "todos",
      url: "/todos",
      component: "todosComponent",
      resolve: {
        todos: getTodos
      }
    };
    var features = {
      name: "features",
      url: "/features",
      component: "featuresComponent"
    };

    function getTodos(TodosService) {
      return TodosService.getTodos();
    }

    $stateProvider.state(todos);
    $stateProvider.state(features);
  }
  angular.module("TodosApp").config(routes);
})();
