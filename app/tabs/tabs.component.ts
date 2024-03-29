import * as angular from 'angular';

/*
    <tabs>
        <tab title="$ctrl.x">
        Bla Bla
        </tab>
         <tab title="bla bla">
         </tab>
    </tabs>
*/

class TabsController {

    private tabs: Array<TabController> = [];

    public register(tab: TabController) {
        this.tabs.push(tab);
    }

    public activate(active: TabController) {
        for(let tab of this.tabs) {
            tab.visible = (tab == active);
        }
    }

    $postLink() {
        // 1. Kinder sind gerendert!
        // 2. DOM-Manipulationen
        if (this.tabs.length == 0) return;
        this.activate(this.tabs[0]);
    }

}

export var tabsComponentDesc: angular.IComponentOptions = {
    controller: TabsController,
    transclude: true,
    template: `

        <div style="background-color:lightpink; padding:20px;">
            <span ng-repeat="tab in $ctrl.tabs" style="padding-right:20px;">
                <a ng-click="$ctrl.activate(tab)">{{tab.title}}</a>
            </span>

            <ng-transclude></ng-transclude>
        </div>
    `
}


class TabController {
    public visible: boolean = false;
    public title: string;
    public tabs: TabsController;

    $onInit() {
        this.tabs.register(this);
    }
}

export var tabComponentDesc: angular.IComponentOptions = {
    controller: TabController,
    require: {
        tabs: '^tabs'
    },
    bindings: {
        title: '@'
    },
    transclude: true,
    template: `
        <div ng-if="$ctrl.visible">
            <h2>{{$ctrl.title}}</h2>
            <ng-transclude></ng-transclude>
        </div>
    `
}