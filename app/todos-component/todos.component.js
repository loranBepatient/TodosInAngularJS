(function() {
  var component = {
    templateUrl: "./app/todos-component/todos.component.html",
    controller: controller
  };

  function controller(TodosService) {
    var ctrl = this;
    ctrl.title = "My Todos";
    ctrl.query = "";
    ctrl.todos = [];
    ctrl.onDelete = onDelete;
    ctrl.onCompleted = onCompleted;

    ctrl.$onInit = onInit;

    function onInit() {
      ctrl.todos = TodosService.getTodos();
    }

    function onDelete(todo) {
      ctrl.todos = ctrl.todos.filter(function(_todo) {
        return _todo.id !== todo.id;
      });
    }

    function onCompleted(todo) {
      var index = ctrl.todos.findIndex(_todo => _todo.id === todo.id);
      ctrl.todos[index]["completed"] = !ctrl.todos[index]["completed"];
    }
  }
  angular.module("TodosApp").component("todosComponent", component);
})();
