function AppCtrl ($scope) {
  $scope.setActive = function(type){
    $scope.destinationsActive = '';
    $scope.flightsActive = '';
    $scope.reservationsActive = '';

    $scope[type + 'Active'] = 'active';
  }
  $scope.airports = {
    "PDX": {
      "code": "PDX",
      "name": "Portland International Airport",
      "city": "Portland",
      "destinations": [
        "LAX",
        "SFO"
      ]
    },
    "STL": {
      "code": "STL",
      "name": "Lambert-St. Louis International Airport",
      "city": "St. Louis",
      "destinations": [
        "LAX",
        "MKE"
      ]
    },
    "MCI": {
      "code": "MCI",
      "name": "Kansas City International Airport",
      "city": "Kansas City",
      "destinations": [
        "LAX",
        "DFW"
      ]
    }
  };
  $scope.sidebarURL = "partials/airport.html"
  $scope.editAirportURL = "partials/editAirport.html"
  $scope.editAirport = null;
  $scope.currentAirport = null;
  $scope.setAirport = function (code){
    $scope.currentAirport = $scope.airports[code];
  };
  $scope.setEditAirport = function (code){
    $scope.editAirport = $scope.airports[code];
  };  
}