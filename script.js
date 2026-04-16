let map;

async function initMap() {
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.833588023525955, lng: -87.62430311366923 },
    zoom: 15,
  });

  const position = { lat: 41.833588023525955, lng: -87.62430311366923 };

  const pin = new PinElement({
    background: "#3F3C49",
    borderColor: "#EE2AA9",
    glyphColor: "#F6FF35",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Here is the house",
    content: pin.element,
  });
  
}

window.initMap = initMap;