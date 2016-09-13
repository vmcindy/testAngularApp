testApp.controller('postsController', function($scope, postsService, usersService, photosService) {
	var postsPromise = function() {
		postsService.postsCall()
		.then(function(data){
			$scope.posts = data;
			usersPromise();
			photosPromise();
		},function(error){
			console.log("From postsController - error",error);
		})
	};
	var usersPromise = function() {
		usersService.usersCall()
		.then(function(data){
			$scope.users = data;
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
	postsPromise();
});