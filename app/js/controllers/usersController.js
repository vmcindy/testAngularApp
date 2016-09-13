testApp.controller('usersController', function($scope, usersService, photosService) {
	var usersPromise = function() {
		usersService.usersCall()
		.then(function(data){
			$scope.users = data;
			photosPromise();
		},function(error){
			console.log("From usersController - error",error);
		})
	};
    var photosPromise = function() {
        photosService.photosCall()
        .then(function(data){
            $scope.photos = data;
        },function(error){
            console.log("From photoController - error",error);
        })
    };
	usersPromise();
});