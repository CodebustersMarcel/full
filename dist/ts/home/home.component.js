"use strict";
var HomeController = (function () {
    function HomeController(oauthService) {
        this.oauthService = oauthService;
        this.info = "Willkommen!";
    }
    HomeController.prototype.logIn = function () {
        this.oauthService.initImplicitFlow();
    };
    HomeController.prototype.logOut = function () {
        this.oauthService.logOut();
    };
    Object.defineProperty(HomeController.prototype, "name", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims)
                return null;
            return claims.given_name; // OIDC
        },
        enumerable: true,
        configurable: true
    });
    return HomeController;
}());
exports.homeComponentDesc = {
    controller: HomeController,
    template: "\n        <h1 ng-if=\"!$ctrl.name\">{{$ctrl.info}}</h1>\n        <h1 ng-if=\"$ctrl.name\">Hello, {{$ctrl.name}}</h1>\n        <button class=\"btn btn-default\" ng-click=\"$ctrl.logIn()\">Login</button>\n        <button class=\"btn btn-default\" ng-click=\"$ctrl.logOut()\">Logout</button>\n    "
};
//# sourceMappingURL=home.component.js.map