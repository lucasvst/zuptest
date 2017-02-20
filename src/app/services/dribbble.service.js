(function(angular) {
	"use strict";

	angular
		.module('app')
		.factory('DribbbleService', DribbbleService);

	DribbbleService.$inject = ['ApiService', '$q'];

	function DribbbleService(ApiService, $q) {

		/**
		 * Me.
		 */
		var svc = {};

		/**
		 * Service properties.
		 */
		svc.shots = [];

		/**
		 * Service methods.
		 */
		svc.getAll = getAll;

		/**
		 * Public functions (exposed by methods).
		 */
		function getAll(clearCache) {

			var defer = $q.defer();

			if (svc.shots.length && !clearCache) {
				defer.resolve(svc.shots);
				return defer.promise;
			}

			ApiService.getShots().then(function(res){
				angular.copy(res.data, svc.shots);
				defer.resolve(svc.shots);
			}, function(res) { console.log(res); defer.reject(res) });

			return defer.promise;
		}

		/**
		 * Return me.
		 *
		 * angular.factory gives the return of function,
		 * instead a NEW instance, like angular.service.
		 */
		return svc;
	}

})(window.angular);
