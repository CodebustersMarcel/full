"use strict";
var BookingEventService = (function () {
    function BookingEventService($rootScope) {
        this.$rootScope = $rootScope;
        this.subscriber = [];
    }
    BookingEventService.prototype.subscribe = function (f) {
        this.subscriber.push(f);
    };
    BookingEventService.prototype.publish = function (f) {
        for (var _i = 0, _a = this.subscriber; _i < _a.length; _i++) {
            var s = _a[_i];
            s(f);
        }
        // setTimeout(() => { this.$rootScope.$apply(); }, 0);
    };
    return BookingEventService;
}());
exports.BookingEventService = BookingEventService;
//# sourceMappingURL=booking-event.service.js.map