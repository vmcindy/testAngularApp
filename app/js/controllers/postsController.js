(function() {
    'use strict';
    
    angular
        .module('testAppAngular')
        .controller('postsController', postsController);

    postsController.inject = ['postsService', 'usersService', 'photosService'];

	function postsController (postsService, usersService, photosService) {
		var vm = this;

		vm.photos = '';
		vm.photosPromise = photosPromise;
		vm.posts = '';
		vm.postsPromise = postsPromise;
		vm.users = '';
		vm.usersPromise = usersPromise;

		activate();

		function activate () {
			vm.postsPromise();
			vm.usersPromise();
			vm.photosPromise();
		}
		function postsPromise () {
			postsService.postsCall()
			.then(function(data){
				vm.posts = data;
			},function(error){
				vm.posts = [];
			})
		};
		function usersPromise () {
			usersService.usersCall()
			.then(function(data){
				vm.users = data;
			},function(error){
				vm.users = [];
			})
		};
	    function photosPromise () {
	        photosService.photosCall()
	        .then(function(data){
	            vm.photos = data;
	        },function(error){
				vm.photos = [];
	        })
	    };
	}
})();