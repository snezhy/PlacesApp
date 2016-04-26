/**
 * Created by Snezhana on 25/04/16.
 */


'use strict';
app.controller('placesController', function ($scope, placesService, $filter) {

    $scope.exploreNearby = "London";
    $scope.exploreQuery = "";
    $scope.filterValue = "";

    $scope.places = [];
    $scope.filteredPlaces = [];
    $scope.filteredPlacesCount = 0;

    //paging
    $scope.totalRecordsCount = 0;
    $scope.pageSize = 10;
    $scope.currentPage = 1;

    init();

    function init() {

       // createWatch();
        getPlaces();
    }

    function getPlaces() {

        var offset = ($scope.pageSize) * ($scope.currentPage - 1);

        placesService.get({ near: $scope.exploreNearby, query: $scope.exploreQuery, limit: $scope.pageSize, offset: offset }, function (placesResult) {
    
            if (placesResult.response.groups) {
                $scope.places = placesResult.response.groups[0].items;
                $scope.totalRecordsCount = placesResult.response.totalResults;
                //filterPlaces('');
            }
            else {
                $scope.places = [];
                $scope.totalRecordsCount = 0;
            }
        });
    };

//    function filterPlaces(filterInput) {
//        $scope.filteredPlaces = $filter("placeFilter")($scope.places, filterInput);
//        $scope.filteredPlacesCount = $scope.filteredPlaces.length;
//    }
//
//    function createWatch() {
//
//        $scope.$watch("filterValue", function (filterInput) {
//            filterPlaces(filterInput);
//        });
//    }
//
//    $scope.doSearch = function () {
//
//        $scope.currentPage = 1;
//        getPlaces();
//    };
//
//    $scope.pageChanged = function (page) {
//
//        $scope.currentPage = page;
//        getPlaces();
//    };
//
//    $scope.buildCategoryIcon = function (icon) {
//
//        return icon.prefix + '44' + icon.suffix;
//    };
//
//    $scope.buildVenueThumbnail = function (photo) {
//
//        return photo.items[0].prefix + '128x128' + photo.items[0].suffix;
//    };
});
