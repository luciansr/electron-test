var TesteNamespace;
(function (TesteNamespace) {
    var Teste = (function () {
        function Teste() {
            this.Bla = "s";
        }
        return Teste;
    }());
})(TesteNamespace || (TesteNamespace = {}));
angular.module('', []);
