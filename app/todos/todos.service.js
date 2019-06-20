(function() {
  function service($resource) {
    var endPoint = "https://jsonplaceholder.typicode.com/todos";
    return {
      getTodos: getTodos
    };

    function getTodos() {
      console.log("getting todos");
      var todos = $resource(endPoint);
      return todos;
    }
  }
  angular.module("TodosApp").factory("todosService", service);
})();
