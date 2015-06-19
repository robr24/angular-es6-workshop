'use strict';

class NavbarCtrl {
  constructor ($scope) {
    $scope.date = new Date();
    this.$scope = $scope;
  }

  get() {
    this.$scope;
  }
}

NavbarCtrl.$inject = ['$scope'];

export default NavbarCtrl;
