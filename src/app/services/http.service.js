(function(angular, undefined) {
    'use strict';

    angular
    .module('app')
    .factory('HTTPService', HTTPService);

    HTTPService.$inject = ['API', 'OAUTH_CREDENTIALS', '$http', '$q'];

    function HTTPService(API, OAUTH_CREDENTIALS, $http, $q) {

        return {
            get: get,
            post: post
        }

        function http(url, params, method) {

            return $http({
                method: method,
                url: url,
                params: method == 'GET' ? params : null,
                data: method == 'POST' ? params : null,
                headers: {
                    'Authorization': 'Bearer ' + OAUTH_CREDENTIALS['access_token'],
                    'Content-Type': 'application/json',
                }
            });
        }

        function get(url, params) {
            return http(url, params, 'GET');
        }

        function post(url, params) {
            return http(url, params, 'POST');
        }
    };

})(angular);
