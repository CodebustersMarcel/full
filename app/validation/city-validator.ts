/**
 * Created by steyer on 12.07.2016.
 */
import * as angular from 'angular';


export function createCityValidatorDDO(): angular.IDirective {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attr, ngModel: any) {


            let cityString = attr.city;
            let cities = cityString.split(',');



            ngModel.$parsers.unshift(function (viewValue) {

                let ok = (cities.indexOf(viewValue) > -1);

                switch(viewValue) {
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

                switch(value) {
                    case "Graz": return "GRZ";
                    case "Hamburg": return "HAM";
                }

                return value;
            });


        }
    };
}