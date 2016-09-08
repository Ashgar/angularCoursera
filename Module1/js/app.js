(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']

function LunchCheckController($scope) {
  $scope.message = '';

  $scope.calculate = function() {
    if ($scope.menu.trim().length == 0) {
      $scope.message = 'Please enter data first';
      $scope.style = "border: 1px solid red; color: red";
    } else {
      console.log($scope.menu);
      if ($scope.menu.split(',').length <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
      $scope.style = "border: 1px solid green; color: green";
    }
  }

}

})();
