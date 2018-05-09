function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(34.952413, -111.747165)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                                mapOptions);
  var image = "../img/icon-map-marker.svg";
  var myLatLng = new google.maps.LatLng(34.952413, -111.747165);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
