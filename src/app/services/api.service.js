(function(angular) {
	"use strict";

	angular
		.module('app')
		.service('ApiService', ApiService);

	ApiService.$inject = ['API', 'HTTPService'];

	function ApiService (API, HTTPService) {

		/**
		 * Me.
		 */
		var self = this;

		/**
		 * Service methods.
		 */
		self.getShots = getShots;
		function getShots() {
			return HTTPService.get(API.shots);
		}

		self.isLiked = isLiked;
		function isLiked(_id) {
			return HTTPService.get(API.shots + '/' + _id + '/like');
		}

		self.likeShot = likeShot;
		function likeShot(_id) {
			return HTTPService.post(API.shots + '/' + _id + '/like');
		}

		/**
		 * angular.service returns a NEW INSTANCE,
		 * instead function return, like angular.factory.
		 * This way there's no need to return anything, once
		 * everything appended to 'this' will be available at the instance.
		 */
	}

})(window.angular);
