/**
 * Created by Snezhana on 25/04/16.
 */

var requestParms = {
    clientId: "LSYLG2JMCTP1GIZUOK1BPGH3MXSU53SARHCPWTCWVAT1SU1T",
    clientSecret: "3AARGT0JQCW5SFFA2HDWWD04PTONWP2X4OCSTKH4HEY2V2HF"
}

app.factory('placesService', function ($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:action';

    return $resource(requestUri,
        {
            action: 'explore',
            client_id: requestParms.clientId,
            client_secret: requestParms.clientSecret,
            v: requestParms.version,
            venuePhotos: '1',
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });

});