import * as angular from 'angular';
import {FlightService} from "./services/flight.service";
import {createCityFilter} from "./fliters/city.filter";
import {flightCardCompDesc} from "./flight-search/flight-card.component";
import {createCityValidatorDDO} from "./validation/city-validator";
import {createCityValidator2DDO} from "./validation/city-validator2";
import {createCityAsyncValidatorDDO} from "./validation/city-async-validator";
import {flightSearchComponentDesc} from "./flight-search/flight-search.component";
import {homeComponentDesc} from "./home/home.component";
import {passengerSearchComponentDesc} from "./passenger-search/passenger-search.component";
import {appComponentDesc} from "./app.component";
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';
import {flightEditComponentDesc} from "./flight-edit/flight-edit.component";
import {flightBookingComponentDesc} from "./flight-booking/flight-booking.component";
import { OAuthService} from 'angular2-oauth2/oauth-service';
import {IState} from "angular-ui-router";
import tabs from './tabs/tabs';
import {BookingEventService} from "./services/booking-event.service";
import {shoppingCardComponentDesc} from "./shopping-card/shopping-card.component";

var app = angular.module('flight-app', ['ngMessages', 'ui.router', tabs]);

app.service("flightService", FlightService);
app.service('bookingEventService', BookingEventService );
app.constant("baseURL", "http://www.angular.at")
app.filter("city", createCityFilter);
app.component('flightCard', flightCardCompDesc);
app.directive('city', createCityValidatorDDO);
app.directive('city2', createCityValidator2DDO);
app.directive('cityAsync', createCityAsyncValidatorDDO);
app.component('flightSearch', flightSearchComponentDesc);
app.component('home', homeComponentDesc);
app.component('passengerSearch', passengerSearchComponentDesc);
app.component('app', appComponentDesc);
app.component('flightEdit', flightEditComponentDesc);
app.component('flightBooking', flightBookingComponentDesc);
app.service('oauthService', OAuthService);
app.component('shoppingCard', shoppingCardComponentDesc);

const DEBUG = true;

app.config(function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state('home', {
        url: '/home',
        template: '<home></home>'
    })
    .state('flightBooking', {
        abstract: true,
        data: {
            protected: true
        },
        url: '/flightBooking',
        template: '<flight-booking></flight-booking>',
    })
    .state('flightBooking.passengerSearch', {
        url: '/passenger',
        template: '<passenger-search></passenger-search>',
        data: {
            protected: true
        }
    }).state('flightBooking.flightSearch', {
        url: '/flight',
        template: '<flight-search></flight-search>',
        data: {
            protected: true
        }
    }).state('flightBooking.flightEdit', {
        url: '/flight/:id',
        template: '<flight-edit></flight-edit>',
        data: {
            protected: true
        }
    });

});


app.run(function(
    oauthService: OAuthService,
    $state,
    $rootScope: angular.IRootScopeService,
    $http: angular.IHttpService) {



    // oauthService.loginUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/authorize"; //Id-Provider?
    // oauthService.issuer = "https://steyer-identity-server.azurewebsites.net/identity";

    oauthService.loginUrl = "https://localhost:44301/identity/connect/authorize"; //Id-Provider?
    oauthService.issuer = "https://localhost:44301/identity";


        oauthService.redirectUri = window.location.origin + "/index.html";
    oauthService.clientId = "spa-demo";

    oauthService.scope = "openid profile email voucher";
    oauthService.oidc = true;
    oauthService.setStorage(sessionStorage);

    oauthService.tryLogin({
        onTokenReceived: (ctx) => {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + oauthService.getAccessToken();
        }
    });


    $rootScope.$on("$stateChangeStart", function (event: angular.IAngularEvent, toState: IState, toParams, fromState: IState, fromParams) {



        if (DEBUG) return;
        let loggedIn = oauthService.hasValidAccessToken()
            && oauthService.hasValidIdToken();

        if (toState.data && toState.data.protected && !loggedIn) {

            event.preventDefault();
            var requestedUrl = $state.href(toState, toParams);
            $state.transitionTo("home", { requestedUrl: requestedUrl });
        }

    });

})