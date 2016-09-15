(function() {
    'use strict';
        
    angular
        .module('testAppAngular')
        .controller('userController', userController);

    userController.inject = ['$routeParams', 'usersService', 'photosService'];

    function userController ($routeParams, usersService, photosService) {
        var vm = this;

        vm.photo = '';
        vm.photoPromise = photoPromise;
        vm.user = '';
        vm.userPromise = userPromise;

    	function userPromise () {
    		usersService.userCall($routeParams.userId)
    		.then(function(data){
    			vm.user = data;
    		},function(error){
    			console.log("From userController - error",error);
    		})
    	};
        function photoPromise () {
            photosService.photoCall($routeParams.userId)
            .then(function(data){
                vm.photo = data;
            },function(error){
                console.log("From photoController - error",error);
            })
        };
        vm.userPromise();
        vm.photoPromise();
    }
})();