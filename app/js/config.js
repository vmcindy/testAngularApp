(function() {
   'use strict';

   angular
      .module('testAppAngular')
      .constant('config', {
         'root': 'http://jsonplaceholder.typicode.com',
      })
      .config(config);

   config.$inject = ['$routeProvider'];

   function config($routeProvider) {
      $routeProvider.
      when('/', {
         templateUrl: './app/views/posts.html',
         controller: 'postsController',
         controllerAs: 'vm'
      }).
      when('/posts/:postId', {
         templateUrl: './app/views/post.html',
         controller: 'postController',
         controllerAs: 'vm'
      }).
      when('/users', {
         templateUrl: './app/views/users.html',
         controller: 'usersController',
         controllerAs: 'vm'
      }).
      when('/users/:userId', {
         templateUrl: './app/views/user.html',
         controller: 'userController',
         controllerAs: 'vm'
      }).
      otherwise({
         redirectTo: '/'
      });
   }
})();