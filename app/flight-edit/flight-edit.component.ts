import * as angular from 'angular';
import {FlightService} from "../services/flight.service";
import {Flight} from "../entities/flight";

class FlightEditController {
    info = "Flight Edit!";
    id: string;
    flight: Flight;
    message: string;

    constructor($stateParams: any, private flightService: FlightService) {
        this.id = $stateParams.id;

        this.flightService
            .getById(this.id)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = "";
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }

    save() {

        this.flightService
            .save(this.flight)
            .then((flight: Flight) => {
                this.flight = flight;
                this.message = "";
            })
            .catch(resp => {
                console.error(resp);
                this.message = resp.data;
            })
    }
}

export let flightEditComponentDesc: angular.IComponentOptions = {
    controller: FlightEditController,
    template: require('./flight-edit.component.html')
}