// sample data is retrieved from file "cantonstats-geojson.json"
// (e. g. variable "chcenter", "data")

var map;

function initMap() {


  var chcenter = new google.maps.LatLng(chdata.lat, chdata.long);

  var initialView = {
    center: chcenter,
    zoom: 8
  }
  var mapCanvas = document.getElementById('map-canvas');

  // create a new map object in mapCanvas with initialView
  map = new google.maps.Map(mapCanvas, initialView);

  //load and add geojson data to the map data layer
  map.data.loadGeoJson('data/cantonstats-geojson.json');

  //Register a callback function which styles point type geometries.
  //This function is internally called, each time a "point" has to be drawn on the
  //map. In this case the function returns a circle representing the population
  //of a canton. Basicly the function defines a new marker.
  map.data.setStyle(function(feature) {

    var population = feature.getProperty('population');

    return {
      icon: getCircle(population)
    }
  });

}

//Function which styles a circle used for a marker.
function getCircle(population) {

  var circle = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .4,
    scale: Math.sqrt(population)/20,
    strokeColor: 'white',
    strokeWeight: .5
   }

   return circle;
 }
