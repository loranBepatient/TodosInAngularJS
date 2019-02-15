(function() {
  function service($http, $q) {
    var endpoint = "https://jsonplaceholder.typicode.com/todos";
    return {
      getTodos: getTodos
    };

    function getTodos() {
      var deferred = $q.defer();
      $http.get(endpoint).then(function(todos) {
        deferred.resolve(todos.data);
      });

      return deferred.promise;
    }
  }
  angular.module("TodosApp").factory("TodosService", service);
})();
