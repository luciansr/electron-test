(() => {
    class MenuDirectiveController {


    }

    angular.module(App.Config.APP_NAME).directive('sideBarMenu', menuDirective);

    function menuDirective() {
        return {
            controller: MenuDirectiveController,
            controllerAs: 'menuCtrl',
            templateUrl: 'app/directives/menu/side-bar-menu.html',
            replace: true
        };
    }

})();
