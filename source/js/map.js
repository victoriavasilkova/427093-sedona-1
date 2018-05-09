function initMap() {
  var uluru = {lat: 34.952413, lng: -111.747165};
  var image = "../img/icon-map-marker.svg";
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 7,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
}
