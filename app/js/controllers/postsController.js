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

		function postsPromise () {
			postsService.postsCall()
			.then(function(data){
				vm.posts = data;
				vm.usersPromise();
				vm.photosPromise();
			},function(error){
				console.log("From postsController - error",error);
			})
		};
		function usersPromise () {
			usersService.usersCall()
			.then(function(data){
				vm.users = data;
			},function(error){
				console.log("From usersController - error",error);
			})
		};
	    function photosPromise () {
	        photosService.photosCall()
	        .then(function(data){
	            vm.photos = data;
	        },function(error){
	            console.log("From photoController - error",error);
	        })
	    };
		vm.postsPromise();
	}
})();