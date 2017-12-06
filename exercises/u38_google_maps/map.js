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
    map.data.loadGeoJson('mountains.geojson');
}