angular.module('marveldb',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl: 'app/views/base.html',
				controller : 'baseController'
			})
			.otherwise({
				redirectTo : '/'
			});
	}]);


var characters = [];

function listOfCharacters() {
	characters = [];
	for(var i=0; i < localStorage.length; i++) {
		characters.push(localStorage.key(i));
	}
	$('#query').autocomplete({
		source : characters
	});
}
window.setInterval(function() {listOfCharacters();}, 1000);