(function(angular) {
	"use strict";
	angular
		.module('app')
		.config(defineRoutes);

	defineRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function defineRoutes ($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: true
			}).hashPrefix('!');

		$urlRouterProvider.otherwise('/');

		$stateProvider
			
			.state('login', {
				url:'/login',
				anonymous: true,
				controller: 'LoginController as loginCtrl'
			})
			
			.state('oauth', {
				url:'/oauth?code&state',
				anonymous: true,
				controller: 'OauthController as oauthCtrl'
			})
			
			.state('list', {
				url:'/',
				anonymous: false,
				views: {
					'': {
						templateUrl: 'views/shot/list.html',
						controller: 'ListController as listCtrl',

					},
					'navbar@home': { templateUrl: 'views/common/navbar.html' }
				}
			})
	}
})(window.angular);