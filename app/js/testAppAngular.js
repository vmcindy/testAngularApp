var testApp = angular.module('testAppAngular', ['ngRoute']);

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});