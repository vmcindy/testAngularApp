(function() {
    'use strict';

    var root = 'http://jsonplaceholder.typicode.com';
    angular
        .module('testAppAngular')
        .factory('postsService', postsService);

    function postsService ($http, $q) {
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
    }
})();