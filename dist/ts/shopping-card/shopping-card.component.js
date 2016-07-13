"use strict";
var ShoppingCardController = (function () {
    function ShoppingCardController(bookingEventService) {
        var _this = this;
        bookingEventService.subscribe(function (f) {
            _this.flight = f;
        });
    }
    return ShoppingCardController;
}());
exports.shoppingCardComponentDesc = {
    controller: ShoppingCardController,
    template: "\n        <div class=\"panel panel-default\">\n\n          <div class=\"panel-heading\">Your Shopping Basket</div>\n\n            <ul class=\"list-group\">\n\n                <li class=\"list-group-item\">\n                    {{$ctrl.flight.from}} - {{$ctrl.flight.to}}\n                </li>\n            </ul>\n          </div>\n        </div>\n    "
};
//# sourceMappingURL=shopping-card.component.js.map