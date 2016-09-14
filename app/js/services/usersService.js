(function() {
    'use strict';

    var root = 'http://jsonplaceholder.typicode.com';
    angular
        .module('testAppAngular')
        .factory('usersService', usersService);

    function usersService ($http, $q) {
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
    }
})();