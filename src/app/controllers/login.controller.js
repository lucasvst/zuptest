(function(angular) {
	"use strict";

	angular
		.module('app')
		.controller('LoginController', LoginController);

	LoginController.$inject = [];

	function LoginController() {

		var _url = 'https://dribbble.com/oauth/authorize?';
		
		_url = _url + 'client_id=e254abeade15a59468cdd90a9854e888489295bb87cadfd36a3d900f20b98a9b';
		_url = _url + '&redirect_uri=http://localhost:8000/oauth';
		_url = _url + '&scope=write';
		_url = _url + '&state=taglkjh99@';

		window.location.href = _url;
	}

})(window.angular);
