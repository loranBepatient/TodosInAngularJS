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
    function getTodos(TodosService) {
      return TodosService.getTodos();
    }

    $stateProvider.state(todos);
  }
  angular.module("TodosModule").config(routes);
})();
