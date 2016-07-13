"use strict";
function createCityValidatorDDO() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attr, ngModel) {
            var cityString = attr.city;
            var cities = cityString.split(',');
            ngModel.$parsers.unshift(function (viewValue) {
                var ok = (cities.indexOf(viewValue) > -1);
                switch (viewValue) {
                    case "HAM":
                        viewValue = "Hamburg";
                        break;
                    case "GRZ":
                        viewValue = "Graz";
                        break;
                }
                if (ok) {
                    ngModel.$setValidity('city', true);
                    return viewValue;
                }
                else {
                    ngModel.$setValidity('city', false);
                    return undefined;
                }
            });
            // Formatter Model --> View
            ngModel.$formatters.unshift(function (value) {
                switch (value) {
                    case "Graz": return "GRZ";
                    case "Hamburg": return "HAM";
                }
                return value;
            });
        }
    };
}
exports.createCityValidatorDDO = createCityValidatorDDO;
//# sourceMappingURL=city-validator.js.map