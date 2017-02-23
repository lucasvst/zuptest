(function(angular) {
    "use strict";

    angular
    .module("app")
    .factory('OAuthService', OAuthService);

    OAuthService.$inject = ['$localStorage', '$http'];

    function OAuthService($localStorage, $http) {
        return {

            getToken : function () {
                return $localStorage.token;
            },

            setToken: function (token) {
                $localStorage.token = token;
            },

            clear: function() {
                delete $localStorage.token;
            },

            retrieveAccessToken: function(code) {
                $http({
                    method: 'POST',
                    url: 'https://dribbble.com/oauth/token?callback=log',
                    params: {
                        'client_id': 'e254abeade15a59468cdd90a9854e888489295bb87cadfd36a3d900f20b98a9b',
                        'client_secret': '56524c45856736ba6c3bcb3b147fc37a25431103fc32e545fad00db293bd1069',
                        'code': code
                    }
                }).then(log, log);
            }
        }
    }

    function log(res) {
        console.log(res)
    }

})(window.angular);


