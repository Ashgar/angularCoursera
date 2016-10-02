(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FountItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var cntr = this;
  cntr.items = [];
  cntr.showError = false;

  cntr.doSearch = function() {
    if (cntr.search === undefined || cntr.search.trim().length == 0) {
      cntr.showError = true;
      return ;
    }
    var promise = MenuSearchService.getItems();

    promise.then(function(response) {
      var list = response.data.menu_items;
      cntr.items = [];
      for(var i =0; i<list.length; i++) {
        var obj = list[i];
        if (obj.description.toLowerCase().indexOf(cntr.search.toLowerCase()) > -1) {
          cntr.items.push(obj);
        }
      }
      cntr.showError = cntr.items.length == 0;
    });
  }

  cntr.removeItem = function(index) {
    cntr.items.splice(index, 1);
    cntr.showError = cntr.items.length == 0;
  }
}

function FountItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      showError: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  service.getItems = function() {
    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json",
    });

    return response;
  }
  

}

})();
