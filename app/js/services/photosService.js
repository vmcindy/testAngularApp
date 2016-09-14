(function() {
    'use strict';

    var root = 'http://jsonplaceholder.typicode.com';
    angular
        .module('testAppAngular')
        .factory('photosService', photosService);

    function photosService ($http, $q) {
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
    }
})();