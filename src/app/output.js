(function () {
})();
var App;
(function (App) {
    var Config;
    (function (Config) {
        Config.APP_NAME = 'app';
    })(Config = App.Config || (App.Config = {}));
})(App || (App = {}));
/// <reference path="../../typings/index.d.ts"/>
(function () {
    angular.module(App.Config.APP_NAME, []);
})();
