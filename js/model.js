angular.module('app', [])
	
	.controller('grid', function($scope) {

		$scope.gallery = [

			{
				filter: 'nature',
			}



		];

		$scope.galleryCount = $scope.gallery.length;

	});