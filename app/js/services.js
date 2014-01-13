angular.module('airlineService', ['ngResource'])
	.factory('Airport', function($resource){
		return $resource('/airports/:airportCode');
	})
	.factory('Flights', function($resource){
		return $resource('/flights');
	})
	;