var app = angular.module('bookKart', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
    .when('/home', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl',
	})
    .when('/books', {
		templateUrl: 'views/bookList.html',
		controller: 'bookCtrl'
	})
		.when('/kart', {
		templateUrl: 'views/karList.html',
		controller: 'kartCtrl'
	})
    .otherwise({ 
        redirectTo: '/home' 
    })
});