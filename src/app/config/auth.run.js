(function(angular, undefined) {
    'use strict';

    angular
    .module('app')
    .run(authInterceptor);

    authInterceptor.$inject = ['$rootScope', 'StorageService', '$state'];

    function authInterceptor($rootScope, StorageService, $state) {

        $rootScope.$on('$stateChangeStart', function(e, next) {
            
            var user = StorageService.get('user');
            
            if( ! user) {
                
                if(next.anonymous) {
                    return;
                }
                
                e.preventDefault();
                $state.go('login');
            }
        });
    };

})(angular);
