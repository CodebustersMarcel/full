import * as angular from 'angular';
import {Flight} from "../entities/flight";
import {FlightService} from "../services/flight.service";
import {BookingEventService} from "../services/booking-event.service";

class FlightSearchController {

    constructor(
        private flightService: FlightService,
        private bookingEventService: BookingEventService) {

    }


    from: string = 'Hamburg';
    to: string = 'Graz';
    selectedFlight: Flight;

    info = "Hallo Welt!";

    // flights: Array<Flight> = [];

    get flights() {
        return this.flightService.flights;
    }

    search() {

        return this
                .flightService
                .find(this.from, this.to)
                .catch(resp => {
                    console.debug(resp);
                });
    }

    select(f: Flight) {
        this.selectedFlight = f;
        this.bookingEventService.publish(f);
    }

}


export let flightSearchComponentDesc: angular.IComponentOptions = {
    controller: FlightSearchController,
    templateUrl: 'app/flight-search/flight-search.component.html'
}