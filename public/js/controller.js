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
testApp.controller('postController', function($scope, $routeParams, postsService, usersService, photosService) {
	var postPromise = function() {
		postsService.postCall($routeParams.postId)
		.then(function(data){
			$scope.post = data;
			userPromise();
			photoPromise();
		},function(error){
			console.log("From postController - error",error);
		})
	};
	var postCommentsPromise = function() {
		postsService.postCommentsCall($routeParams.postId)
		.then(function(data){
			$scope.postComments = data;
		},function(error){
			console.log("From postController - error",error);
		})
	};
	var userPromise = function() {
		usersService.userCall($scope.post.userId)
		.then(function(data){
			$scope.user = data;
		},function(error){
			console.log("From userController - error",error);
		})
	};
    var photoPromise = function() {
        photosService.photoCall($scope.post.userId)
        .then(function(data){
            $scope.photo = data;
        },function(error){
            console.log("From photoController - error",error);
        })
    };
	postPromise();
	postCommentsPromise();
});
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
