(function () {
	// body...
	'use strict';
	var app = angular.module('movieReviewApp', []);
	app.controller('movieReviewController', function ($scope,$http) {
		// body...
		$scope.title = "Movie Time";
		$scope.getItems = function(){

			$http({method:'GET',url:"https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full"})
			.then(function (response) {
				// body...
				$scope.movies = response.data;
		
	    	});


			$http({method:'GET',url:"https://www.omdbapi.com/?s=" + $scope.search})
			.then(function (response) {
				// body...
				$scope.relatedMovies = response.data;
			
		    });
		};
	});
})();