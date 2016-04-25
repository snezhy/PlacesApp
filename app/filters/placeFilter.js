/**
 * Created by Snezhana on 25/04/16.
 */

app.filter("placeFilter", function () {
    return function (places, filterValue) {
        if (!filterValue) return places;

        var matches = [];
        filterValue = filterValue.toLowerCase();
        for (var i = 0; i < places.length; i++) {
            var place = places[i];

            if (place.venue.name.toLowerCase().indexOf(filterValue) > -1 ||
                place.venue.categories[0].shortName.toLowerCase().indexOf(filterValue) > -1) {
                matches.push(place);
            }
        }
        return matches;
    };
});