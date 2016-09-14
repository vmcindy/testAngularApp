(function() {
    'use strict';

    var root = 'http://jsonplaceholder.typicode.com';
    angular
        .module('testAppAngular')
        .factory('commentsService', commentsService);

    function commentsService ($http, $q) {
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
    }
})();