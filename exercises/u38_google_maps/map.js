$(document).ready(function() {
    var chcenter = {
        "lat": 46.798557,
        "long": 8.231784
    }
    initMap(chcenter);
});

function initMap(chcenter) {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(chcenter.lat, chcenter.long)
            /*panControl: false,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP*/
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.data.loadGeoJson('mountains.geojson'); //load and add geojson data to the map data layer

    //Register a callback function which styles point type geometries.
    //This function is internally called, each time a "point" has to be drawn on the
    //map. In this case the function returns a circle representing the population
    //of a canton. Basicly the function defines a new marker.
    map.data.setStyle(function(feature) {

        var population = feature.getProperty('el');

        return {
            icon: getCircle(population)
        }
    });
}

//Function which styles a circle used for a marker.
function getCircle(population) {
    var circle = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        fillColor: 'red',
        fillOpacity: .4,
        scale: Math.sqrt(population) / 3,
        strokeColor: 'white',
        strokeWeight: .5
    }
    return circle;
}