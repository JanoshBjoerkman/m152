// inspiration from: https://stackoverflow.com/questions/27816682/setting-google-maps-api-v3-zoom-level-based-on-screen-device-width
$(document).ready(function() {
    myMap();
});

function myMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var locations = getLocations();

    function bindInfoWindow(marker, map, infowindow, strDescription) {
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(strDescription);
            infowindow.open(map, marker);
        });
    }

    function setMarkers(map, locations) {
        var infowindow = new google.maps.InfoWindow({
            content: ""
        });
        var i, location, myLatLng, marker;
        for (i = 0; i < locations.length; i++) {
            location = locations[i];
            myLatLng = new google.maps.LatLng(location[1], location[2]);
            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: location[0],
                zIndex: location[3]
            });
            bounds.extend(marker.getPosition());
            bindInfoWindow(marker, map, infowindow, location[0]);
        }
    }

    function initialize() {
        var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(47.567827, 9.1212743),
            /*panControl: false,
            disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP*/
        };
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        setMarkers(map, locations);
        map.fitBounds(bounds);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
    google.maps.event.addDomListener(window, 'resize', initialize);
    window.onpopstate = initialize();
}

function getLocations() {
    var locations = [
        ['<a target="_blank" href="https://doodah.ch/de/stores/winterthur-outlet">Dodaah Outlet Winterthur</a>', 47.498343, 8.724216, 1],
        ['<a target="_blank" href="https://www.facebook.com/skateshop.konstanz">Frontline Skateshop</a>', 47.663631, 9.175234, 2],
        ['<a target="_blank" href="https://skate.ch/shop/">Skate.ch</a>', 47.4943893, 8.8953086, 3],
        ['<a target="_blank" href="https://www.cloud-9.ch/">Cloud 9 Distribution AG</a>', 47.439533, 8.5702541, 4]
    ];
    return locations;
}