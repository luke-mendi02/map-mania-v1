var gMap;


function initMap() {
  gMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 13, lng: 121 },
    zoom: 5
  });
  // Marker for Batangas City, Philippines
  var marker = new google.maps.Marker({position:{lat:13.7565, lng:121.0583}, map:gMap});

  var marker2 = new google.maps.Marker({position:{lat:9.8349, lng:118.7384}, map:gMap});
  marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
  var infoWindow = new google.maps.InfoWindow({content:'Palawan, Philippines'});
  marker2.addListener('click', function() {
      infoWindow.open(gMap, marker2);
  });

  google.maps.event.addListener(gMap, 'idle', function(){
      updateGame()
 
  });
  google.maps.event.addListener(gMap,'bounds_changed',function() {
      console.log("Bounds have changed.")
  }
  );
}

function updateGame(){
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;
    const loc1 = {lat: 13.7565, lng: 121.0583};
    if (gMap.getBounds().contains(loc1)){
        inBounds = true;
    }
    console.log("inBounds:" +inBounds+" zoomLevel:" + zoomLevel);
}


function initApplication() {
    console.log('Map Mania Lite - Starting!');
}

