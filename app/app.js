/**
 * Created by Snezhana on 25/04/16.
 */

var app = angular.module('PlacesApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);
app.config(function ($routeProvider) {

    $routeProvider.when("/explore", {
        controller: "placesController",
        templateUrl: "/app/views/places.html"
    });
    $routeProvider.otherwise({ redirectTo: "/explore" });

});