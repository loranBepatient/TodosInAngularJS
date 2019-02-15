(function() {
  var component = {
    templateUrl: "./app/todos/todos-component/todos.component.html",
    bindings: {
      todos: "<"
    },
    controller: controller
  };

  function controller(TodosService) {
    var ctrl = this;
    ctrl.title = "My Todos";
    ctrl.query = "";
    ctrl.todos = [];
    ctrl.onDelete = onDelete;
    ctrl.onCompleted = onCompleted;

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
  angular.module("TodosModule").component("todosComponent", component);
})();
