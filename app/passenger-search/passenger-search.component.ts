import * as angular from 'angular';

class PassengerSearchController {
    info = "PassengerSearch";
}

export let passengerSearchComponentDesc: angular.IComponentOptions = {
    controller: PassengerSearchController,
    template: require('./passenger-search.component.html')
}