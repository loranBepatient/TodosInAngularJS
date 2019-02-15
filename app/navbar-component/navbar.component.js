(function() {
  var component = {
    templateUrl: "./app/navbar-component/navbar.component.html",
    controller: controller
  };

  function controller() {
    var ctrl = this;
    ctrl.onClick = onClick;
    ctrl.links = [
      { label: "Todos", link: "todos", active: true, disabled: false },
      { label: "Features", link: "features", active: false, disabled: false }
    ];

    function onClick(index) {
      ctrl.link = ctrl.links.map(function(link, i) {
        link.active = index === i;
        return link;
      });
    }
  }
  angular.module("TodosApp").component("navBar", component);
})();
