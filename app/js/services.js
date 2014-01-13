angular.module('airlineService', ['ngResource'])
	.factory('Airport', function($resource){
		return $resource('airports/:airportCode');
	});