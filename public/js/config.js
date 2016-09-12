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