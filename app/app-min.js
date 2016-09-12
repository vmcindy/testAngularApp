var testApp = angular.module('testAppAngular', ['ngRoute']);

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
testApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when('/', {
      templateUrl: 'views/posts.html',
      controller: 'postsController'
   }).
   when('/posts/:postId', {
      templateUrl: 'views/post.html',
      controller: 'postController'
   }).
   when('/users', {
      templateUrl: 'views/users.html',
      controller: 'usersController'
   }).
   when('/users/:userId', {
      templateUrl: 'views/user.html',
      controller: 'userController'
   }).
   otherwise({
      redirectTo: '/'
   });
}]);
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

var root = 'http://jsonplaceholder.typicode.com'

testApp.factory('postsService', function($http, $q) {
    var service = {
		postsCall : postsCall,
        postCall : postCall,
        postCommentsCall : postCommentsCall
    }
    return service;
    function postsCall() {
		var postsUrl = root + '/posts';
        return $http.get(postsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
	}
    function postCall(postId) {
        var postsUrl = root + '/posts/'+postId;
        return $http.get(postsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
    }
    function postCommentsCall(postId) {
        var postsUrl = root + '/posts/' + postId + '/comments';
        return $http.get(postsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
    }
});

testApp.factory('commentsService', function($http, $q) {
    var service = {
        commentsCall : commentsCall,
        commentCall : commentCall
    }
    return service;
    function commentsCall() {
        var commentsUrl = root + '/comments';
        return $http.get(commentsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
    function commentCall(commentId) {
        var commentsUrl = root + '/comments/'+commentId;
        return $http.get(commentsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
});

testApp.factory('usersService', function($http, $q) {
    var service = {
        usersCall : usersCall,
        userCall : userCall
    }
    return service;
    function usersCall() {
        var usersUrl = root + '/users';
        return $http.get(usersUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
    function userCall(userId) {
        var usersUrl = root + '/users/'+userId;
        return $http.get(usersUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
});

testApp.factory('photosService', function($http, $q) {
    var service = {
        photosCall : photosCall,
        photoCall : photoCall
    }
    return service;
    function photosCall() {
        var photosUrl = root + '/photos';
        return $http.get(photosUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
    function photoCall(photoId) {
        var photosUrl = root + '/photos/'+photoId;
        return $http.get(photosUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
});