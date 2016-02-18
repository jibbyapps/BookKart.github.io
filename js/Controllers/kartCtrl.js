var app = angular.module('bookKart');

app.controller('kartCtrl', function ($scope, kartService){
	
	$scope.kart = kartService.getKart();
	
	$scope.buy = function (book) {
		kartService.buy(book);
		console.log("buy: ", book);
	}
	
});