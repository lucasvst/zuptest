(function(angular) {
    "use strict";

    angular
    .module("app")
    .factory('StorageService', StorageService);

    StorageService.$inject = ['$localStorage'];

    function StorageService($localStorage) {
        var svc = {};

        svc.set = function(label, value) {
           $localStorage[label] = value;
        }

        svc.get = function(label) {
            if(!svc.exists(label))
                return null;

            return $localStorage[label];
        }

        svc.remove = function(label) {
            if(!svc.exists(label))
                return;

            $localStorage[label] = null;
            delete $localStorage[label];
        }

        svc.exists = function(label) {
            return (label in $localStorage);
        }

        return svc;
    }

 })(window.angular);
