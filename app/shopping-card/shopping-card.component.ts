import * as angular from 'angular';
import {Flight} from "../entities/flight";
import {BookingEventService} from "../services/booking-event.service";

class ShoppingCardController {
    flight: Flight;

    constructor(bookingEventService: BookingEventService) {
        bookingEventService.subscribe((f: Flight) => {
            this.flight = f;
        });
    }
}


export var shoppingCardComponentDesc: angular.IComponentOptions = {
    controller: ShoppingCardController,
    template: `
        <div class="panel panel-default">

          <div class="panel-heading">Your Shopping Basket</div>

            <ul class="list-group">

                <li class="list-group-item">
                    {{$ctrl.flight.from}} - {{$ctrl.flight.to}}
                </li>
            </ul>
          </div>
        </div>
    `
}