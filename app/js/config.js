 angular
   .module('testAppAngular')
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider.
      when('/', {
         templateUrl: './app/views/posts.html',
         controller: 'postsController'
      }).
      when('/posts/:postId', {
         templateUrl: './app/views/post.html',
         controller: 'postController'
      }).
      when('/users', {
         templateUrl: './app/views/users.html',
         controller: 'usersController'
      }).
      when('/users/:userId', {
         templateUrl: './app/views/user.html',
         controller: 'userController'
      }).
      otherwise({
         redirectTo: '/'
      });
   }]);