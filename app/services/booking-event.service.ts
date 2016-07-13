

import {Flight} from "../entities/flight";
import * as angular from 'angular';

export class BookingEventService {

    private subscriber = [];

    constructor(private $rootScope: angular.IRootScopeService) {
    }

    subscribe(f: Function) {
        this.subscriber.push(f);
    }

    publish(f: Flight) {
        for(let s of this.subscriber) {
            s(f);
        }

        // setTimeout(() => { this.$rootScope.$apply(); }, 0);


    }

}