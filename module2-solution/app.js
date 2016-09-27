(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController($scope, ShoppingListCheckOffService) {
  $scope.toBuyItems = ShoppingListCheckOffService.toBuyItems;

  $scope.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  }

  $scope.everythingBuyed = function () {
    return ShoppingListCheckOffService.everythingBuyed();
  };

};

AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
  $scope.alreadyBoughtItems = ShoppingListCheckOffService.alreadyBoughtItems;
  $scope.nothingBuyed = function () {
    return ShoppingListCheckOffService.nothingBuyed();
  };
};

function ShoppingListCheckOffService() {
  this.toBuyItems = [
    { name: "cookies", quantity: 10 }, { name: "bananas", quantity: 2 },
    { name: "pumpkins", quantity: 5 }, { name: "hamburgers", quantity: 4 },
    { name: "watermelons", quantity: 1 }];

  const totalItems = this.toBuyItems.length;

  this.alreadyBoughtItems = [];

  this.buyItem = function (index) {
    // add the item in the alreadyBoughtItems
    this.alreadyBoughtItems.push(this.toBuyItems[index]);
    // remove the item from toBuyItems
    this.toBuyItems.splice(index,1);
  };

  this.nothingBuyed = function () {
    return this.alreadyBoughtItems.length == 0;
  };

  this.everythingBuyed = function () {
    return this.alreadyBoughtItems.length == totalItems;
  }
};

})();
