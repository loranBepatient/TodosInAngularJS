(function() {
  var component = {
    templateUrl: "app/todos/todos.component.html",
    controller: controller
  };

  function controller(todosService) {
    var ctrl = this;
    ctrl.todos = [];

    ctrl.$onInit = onInit;

    function onInit() {
      todosService
        .getTodos()
        .query()
        .$promise.then(function(todos) {
          ctrl.todos = todos;
        });
    }
  }
  angular.module("TodosApp").component("myComp", component);
})();
