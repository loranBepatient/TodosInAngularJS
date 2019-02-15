(function() {
  var component = {
    templateUrl:
      "./app/todos/todos-component/todo-component/todo.component.html",
    bindings: {
      todo: "<",
      onDelete: "&",
      onCompleted: "&"
    },
    controller: controller
  };
  function controller() {
    var ctrl = this;
    ctrl.delete = onDelete;
    ctrl.complete = onCompleted;

    function onDelete() {
      ctrl.onDelete({ todo: ctrl.todo });
    }

    function onCompleted() {
      ctrl.onCompleted({ todo: ctrl.todo });
    }
  }
  angular.module("TodosModule").component("todoComponent", component);
})();
