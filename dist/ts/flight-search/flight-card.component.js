"use strict";
var FlightCardController = (function () {
    function FlightCardController() {
        console.debug("ctor");
        console.debug(this);
    }
    FlightCardController.prototype.$onInit = function () {
        console.debug("init");
        console.debug(this);
    };
    FlightCardController.prototype.$onChanges = function () {
        console.debug("changes");
        console.debug(this);
    };
    FlightCardController.prototype.select = function () {
        this.selectedItem = this.item;
        if (this.selectedItemChange) {
            this.selectedItemChange({ $event: this.selectedItem });
        }
    };
    return FlightCardController;
}());
exports.flightCardCompDesc = {
    controller: FlightCardController,
    templateUrl: 'app/flight-search/flight-card.component.html',
    transclude: true,
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    }
};
//# sourceMappingURL=flight-card.component.js.map