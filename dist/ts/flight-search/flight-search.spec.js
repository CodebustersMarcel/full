"use strict";
var angular_1 = require('angular');
describe("FlugList", function () {
    var httpBackend;
    var flightSearch;
    beforeEach(angular_1.mock.module("flight-app", function ($provide) {
    }));
    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        var $scope = $rootScope.$new();
        flightSearch = $controller("flightSearch", { $scope: $scope });
        httpBackend = $httpBackend;
        $httpBackend
            .expect('GET', 'http://www.angular.at/api/flight?from=Graz&to=Linz')
            .respond([
            { id: 1, from: 'Graz', to: 'Linz', date: '2016-12-24' }
        ]);
    }));
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
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
        // Antwort durch MockBackend simulieren
        httpBackend.flush();
        // Assert
        expect(error).toBe(false);
        expect(flightSearch.flights.length).toBe(1);
    });
});
//# sourceMappingURL=flight-search.spec.js.map