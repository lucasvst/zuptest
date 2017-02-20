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
	API.params = '?access_token=f55186698d4568e5af40a5ffb0df48d0a46b30b7cf7e3a16dc10f69761aedddb';

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

		return API.baseUrl + resourceName + API.params;
	}

})(angular);
