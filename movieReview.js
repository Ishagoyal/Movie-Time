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

			$http({method:'GET',url:"https://api.themoviedb.org/3/search/movie?api_key=9a1750d469929884b1c959126ec22c83&query=" + $scope.search})
			.then(function (response) {
				// body...
				$scope.moviesData = response.data.results;
				console.log(response.data.results[0]);
				$scope.id=response.data.results[0].id;

			

				$http({method:'GET',url:"https://api.themoviedb.org/3/movie/" + $scope.id + "?api_key=9a1750d469929884b1c959126ec22c83&append_to_response=credits"})
			    .then(function (response) {
				// body...
				$scope.fullData = response.data;
				console.log($scope.fullData);
			    

			});

			});

			

			


			// $http({method:'GET',url:"https://www.omdbapi.com/?s=" + $scope.search})
			// .then(function (response) {
			// 	// body...
			// 	$scope.relatedMovies = response.data;
			
		 //    });


		}

		$scope.update = function (film) {
			// body...
			$scope.search = film.Title;
			
		}

	         

	});

	app.controller('reviewController', function ($scope) {
		// body...
		$scope.reviews = [];
		$scope.review = {};


		        $scope.addReview = function () {

		        	$scope.review.createdOn = Date.now();
		        	// body...
		        	$scope.reviews.push({
		        						 userName: $scope.review.userName,		
		    		        			 stars: $scope.review.stars,
		    		        			 message: $scope.review.message,
		        						 email: $scope.review.email,
		        						});
		        	$scope.review = {};
		        };
	});

               


})();