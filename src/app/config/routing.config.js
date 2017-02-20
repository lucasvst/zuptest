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
			.state('home', {
				url:'/',
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