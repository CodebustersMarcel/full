"use strict";
var angular_1 = require('angular');
describe("FlugList (with own mock)", function () {
    var flightSearch;
    var httpBackend;
    var $scope;
    beforeEach(angular_1.mock.module("flight-app", function ($provide) {
    }));
    beforeEach(inject(function ($controller, $rootScope, $q) {
        $scope = $rootScope.$new();
        var mockFlightService = {
            find: function () {
                return $q.resolve([
                    { id: 1, from: 'Graz', to: 'Linz', date: '2016-12-24' }
                ]);
            }
        };
        flightSearch = $controller("flightSearch", {
            $scope: $scope,
            flightService: mockFlightService });
    }));
    it("should load flights", function () {
        // Arrange
        flightSearch.from = 'Graz';
        flightSearch.to = 'Linz';
        var error = false;
        // Act
        flightSearch
            .search()
            .then(function () {
            // Do nothing
        })
            .catch(function () {
            error = true;
        });
        // $apply ist notwendig, da Promises nur beim Digest aufgelöst werden!
        // flush
        $scope.$apply();
        // Assert
        expect(error).toBe(false);
        expect(flightSearch.flights.length).toBe(1);
    });
});
//# sourceMappingURL=flight-search-own-mock.spec.js.map