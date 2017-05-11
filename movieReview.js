(function () {
	// body...
	'use strict';
	var app = angular.module('movieReviewApp', []);
	app.controller('movieReviewController', function ($scope,$http) {
		// body...
		$scope.title = "Movie Time";
		$scope.$watch('search',function(){
          getItems();
		});

          $scope.search = "3 idiots";

		 function getItems(){

			$http({method:'GET',url:"https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full"})
			.then(function (response) {
				// body...
				$scope.movies = response.data;
				$scope.id = $scope.movies.imdbID;
		        console.log($scope.id);

		        $scope.reviews = [];
		        $scope.review = {};

		        $scope.addReview = function () {

		        	this.review.createdOn = Date.now();
		        	// body...
		        	   this.reviews.push({id: $scope.id,
		        						 userName: $scope.review.userName,		
		        						 email: $scope.review.email,
		        						 stars: $scope.review.stars,
		        						 message: $scope.review.message,
		        						 createdOn: $scope.review.createdOn
		        						});
		        	this.review = {};
		        };

		        console.log(this.reviews);
		        
	    	});


			$http({method:'GET',url:"https://www.omdbapi.com/?s=" + $scope.search})
			.then(function (response) {
				// body...
				$scope.relatedMovies = response.data;
			
		    });


		}

		$scope.update = function (film) {
			// body...
			$scope.search = film.Title;
			
		}

	         

	});

               


})();