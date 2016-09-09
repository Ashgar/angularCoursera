(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']

function LunchCheckController($scope) {
  $scope.message = '';

  $scope.calculate = function() {
    if ($scope.menu == undefined || $scope.menu.trim().length == 0) {
      $scope.message = 'Please enter data first';
      $scope.inputStyle = "border: 1px solid red;";
      $scope.messageStyle = "color: red";
    } else {
      console.log($scope.menu);
      if ($scope.menu.split(',').length <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
      $scope.inputStyle = "border: 1px solid green"
      $scope.messageStyle = "color: green";
    }
  }

}

})();
