(function () {
	// body...
	var app = angular.module('movieReviewApp', []);
	app.controller('movieReviewController', function ($scope,$http) {
		// body...
		$scope.title = "Movie Time";
		$scope.items = [];
		$scope.getItems = function(){

			$http({method:'GET',url:'http://www.omdbapi.com/?s=' + $scope.search})
			.then(function mySucess(response) {
				// body...
				$scope.items = response.data;
			},
			function myError(response) {
				// body...
				$scope.items = response.statusText;
			});
		};
	});
})();