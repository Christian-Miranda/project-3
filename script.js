let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.833588023525955, lng: -87.62430311366923 },
    zoom: 15,
  });
}

window.initMap = initMap;