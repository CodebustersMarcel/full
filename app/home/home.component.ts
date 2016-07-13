import * as angular from 'angular';
import {OAuthService} from "angular2-oauth2/oauth-service";

class HomeController {
    info = "Willkommen!";


    constructor(private oauthService: OAuthService) {
    }

    public logIn() {
        this.oauthService.initImplicitFlow();
    }

    public logOut() {
        this.oauthService.logOut();
    }

    public get name() {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name; // OIDC
    }
}

export let homeComponentDesc: angular.IComponentOptions = {
    controller: HomeController,
    template: `
        <h1 ng-if="!$ctrl.name">{{$ctrl.info}}</h1>
        <h1 ng-if="$ctrl.name">Hello, {{$ctrl.name}}</h1>
        <button class="btn btn-default" ng-click="$ctrl.logIn()">Login</button>
        <button class="btn btn-default" ng-click="$ctrl.logOut()">Logout</button>
    `
}