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
				$scope.movies = response.data.results[0];
				console.log(response.data.results[0]);
				$scope.id=response.data.results[0].id;

			

				$http({method:'GET',url:"https://api.themoviedb.org/3/movie/" + $scope.id + "?api_key=9a1750d469929884b1c959126ec22c83&append_to_response=credits"})
			    .then(function (response) {
				// body...
				$scope.fullData = response.data;
				console.log($scope.fullData);
			    

			});

			});

			

			


			$http({method:'GET',url:"https://api.themoviedb.org/3/search/movie?api_key=9a1750d469929884b1c959126ec22c83&query=" + $scope.search})
			.then(function (response) {
				// body...
				$scope.relatedMovies = response.data.results;
			    console.log(response.data.results);
		    });


		}

		$scope.update = function (film) {
			// body...
			$scope.search = film.original_title;
			
		}

	         

	});

	app.controller('reviewController', function ($scope, $window, $http) {
		// body...
        // $http({
        // 	url: 'data.txt',
        //     dataType: 'json',
        //     method: 'POST',
        //     data: '',
        //     headers: {
        //     "Content-Type": "application/json"
        //     }
        // })
        $http.get('data.txt')
        .then(function (response) {
        	// body...
        	$scope.reviews=response.data;
        });

	});
            
})();