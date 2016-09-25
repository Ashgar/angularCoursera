(function () {
'use strict';

angular.module('module2', [])
.controller('ShoppingListBuyController', ShoppingListBuyController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListService', ShoppingListService);;

ShoppingListBuyController.$inject = ['ShoppingListService'];
function ShoppingListBuyController(ShoppingListService) {
  var toBuyCntrl = this;

  toBuyCntrl.items = ShoppingListService.getToBuy();

  toBuyCntrl.buyItem = function (index) {
    console.log("1");
    ShoppingListService.buy(index);
  }
}


ShoppingListBoughtController.$inject = ['ShoppingListService'];
function ShoppingListBoughtController(ShoppingListService) {
  var boughtList = this;

  boughtList.items = ShoppingListService.getBought();

}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var toBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Cola",
      quantity: "5"
    }
  ];
  var bought = []

  service.buy = function(index) {
    bought.push(toBuy[index]);
    toBuy.splice(index, 1);

  };

  service.getToBuy = function () {
    return toBuy;
  };

  service.getBought = function () {
    return bought;
  };

}

})();
