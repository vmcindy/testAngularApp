(function() {
    'use strict';
    
    angular
        .module('testAppAngular')
        .controller('postController', postController);

    postController.inject = ['$routeParams', 'postsService', 'usersService', 'photosService'];

    function postController ($routeParams, postsService, usersService, photosService) {
        var vm = this;

        vm.postComments = '';
        vm.postCommentsPromise = postCommentsPromise;
        vm.postPromise = '';
        vm.postPromise = postPromise;
        vm.user = '';
        vm.userPromise = userPromise;
        vm.photo = '';
        vm.photoPromise = photoPromise;

        function postPromise () {
            postsService.postCall($routeParams.postId)
            .then(function(data){
                vm.post = data;
                vm.userPromise();
                vm.photoPromise();
            },function(error){
                console.log("From postController - error",error);
            })
        };
        function postCommentsPromise () {
            postsService.postCommentsCall($routeParams.postId)
            .then(function(data){
                vm.postComments = data;
            },function(error){
                console.log("From postController - error",error);
            })
        };
        function userPromise () {
            usersService.userCall(vm.post.userId)
            .then(function(data){
                vm.user = data;
            },function(error){
                console.log("From userControllererror",error);
            })
        };
        function photoPromise () {
            photosService.photoCall(vm.post.userId)
            .then(function(data){
                vm.photo = data;
            },function(error){
                console.log("From photoController - error",error);
            })
        };
        vm.postPromise();
        vm.postCommentsPromise();
    }
})();