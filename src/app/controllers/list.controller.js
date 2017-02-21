(function(angular) {
	"use strict";

	angular
		.module('app')
		.controller('ListController', ListController);

	ListController.$inject = ['DribbbleService'];

	function ListController(DribbbleService) {

		/**
		 * Me.
		 */
		var vm = this;

		/**
		 * Controller properties.
		 */
		vm.shots = DribbbleService.shots;

		/**
		 * Controller methods.
		 */
		vm.like = like;

		/**
		 * Public functions (exposed by methods).
		 */
		function like(shot) {
			DribbbleService.like(shot);
		}

		DribbbleService.getAll();
	}

})(window.angular);
