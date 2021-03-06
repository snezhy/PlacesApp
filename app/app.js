/**
 * Created by Snezhana on 25/04/16.
 */

var app = angular.module('PlacesApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);


app.config(function($routeProvider){
    $routeProvider
        .when("/explore", {
            templateUrl: 'app/views/places.html',
            controller: "placesController"
        })
        .when("/about", {
            templateUrl: 'app/views/about.html'
        })
        .otherwise({
            redirectTo: '/explore'
        })
});