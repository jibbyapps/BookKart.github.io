var app = angular.module('bookKart')

app.service('kartService', function () {
	
	var kart = [];
	
	return {
		getKart: function () {
			return kart;
	},
		addToKart: function (book) {
			kart.push(book);
		},
		buy: function (book) {
			alert("Thanks for buying: ", book.name);
		}
	}; 
});