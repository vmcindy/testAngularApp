(function() {
    'use strict';
    
    angular
        .module('testAppAngular')
        .controller('usersController', usersController);

    usersController.inject = ['usersService', 'photosService'];

	function usersController (usersService, photosService) {
        var vm = this;

        vm.photos = '';
        vm.photosPromise = photosPromise;
        vm.users = '';
        vm.usersPromise = usersPromise;

		function usersPromise () {
			usersService.usersCall()
			.then(function(data){
				vm.users = data;
				vm.photosPromise();
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
		vm.usersPromise();
	}
})();