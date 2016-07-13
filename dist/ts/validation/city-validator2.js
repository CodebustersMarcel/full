"use strict";
function createCityValidator2DDO() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, ngModel) {
            ngModel.$validators.city2 = function (value) {
                switch (value) {
                    case "Graz":
                    case "Hamburg":
                    case "Frankfurt":
                        return true;
                }
                return false;
            };
        }
    };
}
exports.createCityValidator2DDO = createCityValidator2DDO;
//# sourceMappingURL=city-validator2.js.map