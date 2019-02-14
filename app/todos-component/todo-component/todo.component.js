(function() {
  var component = {
    templateUrl: "./app/todos-component/todo-component/todo.component.html",
    bindings: {
      todo: '<',
      onDelete: '&'
    },
    controller: controller
  }
  function controller() {
    var ctrl = this;
    ctrl.delete = onDelete

    function onDelete() {
      ctrl.onDelete({todo: ctrl.todo})
    }
  }
  angular.module('TodosApp').component('todoComponent', component)
})()