(function(angular) {
	"use strict";

	angular
		.module('app')
		.controller('OauthController', OauthController);

	OauthController.$inject = ['$stateParams', 'OAuthService'];

	function OauthController($stateParams, OAuthService) {

		OAuthService.retrieveAccessToken($stateParams.code);
	}

})(window.angular);
