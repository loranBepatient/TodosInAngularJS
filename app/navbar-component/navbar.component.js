(function() {
  var component = {
    templateUrl: "./app/navbar-component/navbar.component.html",
    controller: controller
  }

  function controller() {
    var ctrl = this;
    ctrl.onClick = onClick;
    ctrl.links = [
      {label: 'Home', link: '#', active: true, disabled: false},
      {label: 'Features', link: '#', active: false, disabled: false},
      {label: 'Pricing', link: '#', active: false, disabled: false},
      {label: 'Disabled', link: '#', active: false, disabled: true},
    ]

    function onClick(index) {
      ctrl.link = ctrl.links.map(function(link, i) {
        link.active = index === i
        return link
      })

    }

  }
  angular.module('TodosApp').component('navBar', component)
})()
