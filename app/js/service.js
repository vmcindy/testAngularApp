var root = 'http://jsonplaceholder.typicode.com'

testApp.factory('postsService', function($http, $q) {
    var service = {
		postsCall : postsCall,
        postCall : postCall,
        postCommentsCall : postCommentsCall
    }
    return service;
    function postsCall() {
		var postsUrl = root + '/posts';
        return $http.get(postsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
	}
    function postCall(postId) {
        var postsUrl = root + '/posts/'+postId;
        return $http.get(postsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
    }
    function postCommentsCall(postId) {
        var postsUrl = root + '/posts/' + postId + '/comments';
        return $http.get(postsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
    }
});

testApp.factory('commentsService', function($http, $q) {
    var service = {
        commentsCall : commentsCall,
        commentCall : commentCall
    }
    return service;
    function commentsCall() {
        var commentsUrl = root + '/comments';
        return $http.get(commentsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
    function commentCall(commentId) {
        var commentsUrl = root + '/comments/'+commentId;
        return $http.get(commentsUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
});

testApp.factory('usersService', function($http, $q) {
    var service = {
        usersCall : usersCall,
        userCall : userCall
    }
    return service;
    function usersCall() {
        var usersUrl = root + '/users';
        return $http.get(usersUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
    function userCall(userId) {
        var usersUrl = root + '/users/'+userId;
        return $http.get(usersUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
});

testApp.factory('photosService', function($http, $q) {
    var service = {
        photosCall : photosCall,
        photoCall : photoCall
    }
    return service;
    function photosCall() {
        var photosUrl = root + '/photos';
        return $http.get(photosUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
    function photoCall(photoId) {
        var photosUrl = root + '/photos/'+photoId;
        return $http.get(photosUrl)
        .then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                return $q.reject(response.data);
            }

        }, function(response) {
            return $q.reject(response.data);
        });
    }
});