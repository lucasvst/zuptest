(function(angular) {
	'use strict';

	/**
	 * Constant itself.
	 */
	var API	= {};

	/*
	 * Base API URI.
	 */
	API.baseUrl = 'https://api.dribbble.com/v1/';

	/**
	 * Endpoints.
	 */
	API.shots = resourceOf('shots');

	/**
	 * Angular register.
	 */
	angular.module('app').constant('API', API);

	/**
	 * Private function.
	 */
	function resourceOf(resourceName) {

		return API.baseUrl + resourceName;
	}

})(angular);
