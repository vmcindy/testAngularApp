testApp.controller('userController', function($scope, $routeParams, usersService, photosService) {
	var userPromise = function() {
		usersService.userCall($routeParams.userId)
		.then(function(data){
			$scope.user = data;
		},function(error){
			console.log("From userController - error",error);
		})
	};
    var photoPromise = function() {
        photosService.photoCall($routeParams.userId)
        .then(function(data){
            $scope.photo = data;
        },function(error){
            console.log("From photoController - error",error);
        })
    };
    userPromise();
    photoPromise();
});
