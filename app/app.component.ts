import * as angular from 'angular';

class AppController {
}

export let appComponentDesc: angular.IComponentOptions = {
    controller: AppController,
    template: require('./app.component.html')
}