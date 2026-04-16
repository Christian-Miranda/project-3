let map;
let houseLocation;

async function initMap() {
  houseLocation = { lat: 41.833008105893384, lng: -87.62415846783117 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: houseLocation,
    zoom: 15,
    mapId: "81478dee2b879972e3b00e60"
  });

  const { AdvancedMarkerElement, PinElement } =
    await google.maps.importLibrary("marker");

  const pin = new PinElement({
    background: "#3F3C49",
    glyphColor: "#F6FF35",
    borderColor: "#EE2AA9",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: houseLocation,
    title: "Here is the house",
    content: pin.element,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "This is the Phi Kappa Sigma house."
  });

  infoWindow.open({
    map: map,
    anchor: marker
  });

  var button = document.getElementById("recenter-btn");

  if (button) {
    button.onclick = function () {
      map.setCenter(houseLocation);
      map.setZoom(15);
    };
  }
}

window.initMap = initMap;