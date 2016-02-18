var app = angular.module('bookKart');

app.controller('homeCtrl', function ($scope, $location){
	
	$scope.appTitle = {
		title: "Book Kart",
		tagLine: "We have a collection of 1 Million books!"
	};
	
	
	$scope.nav = {};
	$scope.nav.isActive = function (path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
});