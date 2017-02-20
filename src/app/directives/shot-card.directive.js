(function(angular) {
	'use strict';

	angular
	.module('app')
	.directive('shotCard', shotCard)

	shotCard.$inject = [];

	function shotCard() {

		return {

			restrict: 'E',
			templateUrl: 'views/shot/_card.html',
			scope: {
				shot: '=shot',
				like: '=likeAction'
			},

			link: function($scope, elem, attrs) {
			},

			controller: function($scope) {
			}
		};
	}

})(window.angular);
