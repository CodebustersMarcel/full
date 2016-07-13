
import {Flight} from "../entities/flight";
import * as angular from 'angular';

class FlightCardController {
    item: Flight;
    selectedItem: Flight;
    selectedItemChange: Function;

    constructor() {
        console.debug("ctor");
        console.debug(<any>this);
    }

    $onInit() {
        console.debug("init");
        console.debug(<any>this);
    }

    $onChanges() {
        console.debug("changes");
        console.debug(<any>this);
    }

    select() {
        this.selectedItem = this.item;
        if (this.selectedItemChange) {
            this.selectedItemChange({$event: this.selectedItem});
        }
    }
}

export var flightCardCompDesc: angular.IComponentOptions = {
    controller: FlightCardController,
    templateUrl: 'app/flight-search/flight-card.component.html',
    transclude: true,
    bindings: {
        item: '<',
        selectedItem: '<',
        selectedItemChange: '&'
    }
    // controllerAs ist Standard mit $ctrl
};
