function baseController($scope, $http) {

	var apiKey	= 'f30150e881221530ec4718bf68af0a18';
	
	$scope.searchHero = function(hero) {
		if (localStorage[hero]) {
			var data = JSON.parse(localStorage[hero]);
			$scope.hero	= data.data.results[0];
			$scope.events = data.data.results[0].events.items;
			$scope.urls = data.data.results[0].urls;
			$scope.show	= true;
		}
		else {
			$http({
				method	: "GET",
				url		: "http://gateway.marvel.com:80/v1/public/characters",
				params	: {
					"name"		: hero,
					"apikey"	: apiKey
				}
			})
			.success(function(data){
				$scope.hero	= data.data.results[0];
				$scope.events = data.data.results[0].events.items;
				$scope.urls = data.data.results[0].urls;
				$scope.show	= true;
				localStorage.setItem(hero, JSON.stringify(data));
			})
		}
	}

}