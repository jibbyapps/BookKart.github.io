var app = angular.module('bookKart');

app.controller('homeCtrl', function ($scope){
	
	$scope.appTitle = {
		title: "Book Kart",
		tagLine: "We have a collection of 1 Million books!"
	};
});