webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular = __webpack_require__(1);
	var flight_search_controller_1 = __webpack_require__(3);
	var flight_service_1 = __webpack_require__(4);
	var city_filter_1 = __webpack_require__(5);
	var app = angular.module('flight-app', ['ngMessages']);
	app.controller("flightSearch", flight_search_controller_1.FlightSearchController);
	app.service("flightService", flight_service_1.FlightService);
	app.constant("baseURL", "http://www.angular.at");
	app.filter("city", city_filter_1.createCityFilter);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var FlightService = (function () {
	    function FlightService($http, baseURL) {
	        this.$http = $http;
	        this.baseURL = baseURL;
	    }
	    FlightService.prototype.find = function (from, to) {
	        var url = this.baseURL + "/api/flight";
	        var params = {
	            from: from,
	            to: to
	        };
	        return this
	            .$http
	            .get(url, { params: params })
	            .then(function (resp) { return resp.data; });
	    };
	    return FlightService;
	}());
	exports.FlightService = FlightService;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by steyer on 11.07.2016.
	 */
	"use strict";
	function createCityFilter($http) {
	    var filter = function (city, fmt) {
	        var short;
	        var long;
	        switch (city) {
	            case "Hamburg":
	                short = "HAM";
	                long = "Hamburg Airport Helmut Schmidt";
	                break;
	            case "Graz":
	                short = "GRZ";
	                long = "Flughafen Graz Thalerhof";
	                break;
	            default:
	                short = long = "ROM";
	        }
	        if (fmt == 'short')
	            return short;
	        return long;
	    };
	    // filter.$stateful = true;
	    return filter;
	}
	exports.createCityFilter = createCityFilter;


/***/ }
]);
//# sourceMappingURL=app.js.map