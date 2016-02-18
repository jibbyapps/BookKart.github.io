var app = angular.module('bookKart', ["ngRoute", "ngAnimate"]);

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
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html'
	})
    .otherwise({ 
        redirectTo: '/home' 
  })
});