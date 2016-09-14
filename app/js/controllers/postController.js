(function() {
    'use strict';
    
    angular
        .module('testAppAngular')
        .controller('postController', postController);

    function postController ($scope, $routeParams, postsService, usersService, photosService) {
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
                console.log("From userControllererror",error);
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
    }
})();