(function () {
'use strict';
debugger;
var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {

	$scope.checkIfTooMuch = function () {

		if($scope.lunchMenu == null || $scope.lunchMenu == "") {
			$scope.message = "Please enter data first";
			return;
		}
		const lunchItems = $scope.lunchMenu.split(',');
		var itemsCount = lunchItems.length;		
		if(itemsCount <= 3) {
			$scope.message  = "Enjoy!";
			return;
		}else {
			$scope.message = "Too Much!";
			return;
		}
	}
	
}

})();