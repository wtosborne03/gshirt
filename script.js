var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
var oposition;
var eposition;

function start() {
    const soundEffect = new Audio('sound.wav');
    soundEffect.play();
    navigator.geolocation.getCurrentPosition(setupmap, error, options);
    
}
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
function setupmap(position) {
    oposition = position.coords;
    $('.main').html('<div class="overtext container mw-100"><div class="row"><div class="col btext">Choose Location</div><div class="col btext"><button id="go" class="button-n" onclick="go()">GO</button></div></div></div><div id="map"></div>');
    $('#go').hide();
    map();
}

function map() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid3Rvc2Jvcm5lMDMiLCJhIjoiY2tna3F6ODF2MDdsMTJzbG4yNWs3dWJxaiJ9.902DiSI6jaX-O_f_seKSiQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [oposition.longitude, oposition.latitude],
        zoom: 13
    });
    geo = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        
    });
    geo.on('result', function(results) {
        console.log(results);
        eposition = results.result.geometry.coordinates;
        
        $('#go').show();
     })
    map.addControl(geo);
}
function go() {
    rURL = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + oposition.latitude + ',' + oposition.longitude + '&destinations=' + eposition[1] + ',' + eposition[0] + '&key=AIzaSyC_-czyGuDPtTLXv8zioFztqAVe9zfAkHg';
    fetch(rURL, {mode: 'no-cors'})
    .then(response => response.json())
    .then(data => console.log(data));
    $('.main').html();
}