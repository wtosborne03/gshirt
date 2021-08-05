var options = {
    enableHighAccuracy: false,
    timeout: 1000,
    maximumAge: 0
};
var oposition;
var eposition;
var place = "";
var time = 0;
function sleep(ms) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
    });
}

function distance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
        return 0;
    } else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        return dist;
    }
}

var main = document.querySelector('#topmost');
ReactDOM.render(React.createElement(StartPage, null), main);
var click = new Audio('sfx/click.mp3');

function start() {
    var soundEffect = new Audio('sound.wav');
    soundEffect.play();
    navigator.geolocation.getCurrentPosition(setupmap, error);
}
function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
}
function setupmap(position) {
    oposition = position.coords;
    click.play();
    ReactDOM.render(React.createElement(LocationPage, null), main);
}
function relDiff(a, b) {
    return 100 * Math.abs((a - b) / ((a + b) / 2));
}

function go() {
    click.play();
    var origin = new google.maps.LatLng(oposition.latitude, oposition.longitude);
    var destination = new google.maps.LatLng(eposition[1], eposition[0]);

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
    }, callback);
}
function callback(response, status) {
    time = response.rows[0].elements[0].duration.value;
    ReactDOM.render(React.createElement(OptionPage, null), main);
}