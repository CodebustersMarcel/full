"use strict";
var FlightSearchController = (function () {
    /*
    private $http: angular.IHttpService;

    constructor($http: angular.IHttpService) {
        this.$http = $http;
    }
*/
    function FlightSearchController(flightService) {
        /*
        setTimeout(() => {
            this.info = "Manfred war hier!!! Sie wurden gehackt !!!";
            $scope.$apply();
        }, 5000);
        */
        this.flightService = flightService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.info = "Hallo Welt!";
        this.flights = [];
    }
    FlightSearchController.prototype.search = function () {
        var _this = this;
        return this.flightService
            .find(this.from, this.to)
            .then(function (flights) {
            _this.flights = flights;
        })
            .catch(function (resp) {
            console.error("Error fetching data via HTTP");
            console.error(resp);
        });
    };
    FlightSearchController.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    return FlightSearchController;
}());
exports.FlightSearchController = FlightSearchController;
//# sourceMappingURL=flight-search.controller.js.map