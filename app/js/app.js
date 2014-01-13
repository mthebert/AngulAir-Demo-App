angular.module('airline', ['airlineService'])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/destinations.html', controller: 'DestinationsCtrl'})
		.when('/airports/:airportCode', { templateUrl: 'partials/airport.html', controller: 'AirportCtrl'})
		.when('/flights', { templateUrl: 'partials/flights.html', controller: 'FlightsCtrl'})
		.when('/reservations', { template: '<h3>Your Reservations</h3> {{airports | json}}', controller: 'ReservationsCtrl'});
}