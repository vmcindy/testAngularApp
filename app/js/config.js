(function () {
    'use strict';

    angular
        .module('testAppAngular')
        .constant('config', {
            // 'root': 'http://jsonplaceholder.typicode.com',
            'root': 'http://localhost:3300', //Run testRestApi, to connect to Local API server
        })
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'posts.html',
                controller: 'postsController',
                controllerAs: 'vm'
            }).
            when('/posts/:postId', {
                templateUrl: 'post.html',
                controller: 'postController',
                controllerAs: 'vm'
            }).
            when('/users', {
                templateUrl: 'users.html',
                controller: 'usersController',
                controllerAs: 'vm'
            }).
            when('/users/:userId', {
                templateUrl: 'user.html',
                controller: 'userController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/'
            });

        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }
    }
})();