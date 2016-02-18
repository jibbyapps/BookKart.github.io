var app = angular.module('bookKart');

app.controller('bookCtrl', function ($scope, bookService, kartService) {
	
	$scope.books = bookService.getBooks();
	
	
	
	
	$scope.addToKart = function(book) {
		
		kartService.addToKart(book);
		
		console.log("add to kart: ", book);
	}
});

