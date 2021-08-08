'use strict';

class LocationPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoid3Rvc2Jvcm5lMDMiLCJhIjoiY2tna3F6ODF2MDdsMTJzbG4yNWs3dWJxaiJ9.902DiSI6jaX-O_f_seKSiQ';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [oposition.longitude, oposition.latitude],
            zoom: 13
        });
        var geo = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
            
        });
        geo.on('result', function(results) {
            console.log(results);
            eposition = results.result.geometry.coordinates;
            place=results.result.text;
            $('#go').show();
        });
        map.setStyle('mapbox://styles/mapbox/dark-v10');
        map.addControl(geo);
        $('#go').hide();
  }

  render() {

    return (
        <div id="p2">
            <div id="map"></div>
            <div class="overtext container mw-100">
            
            <div class="row">
                <div class="col btext">Choose Location</div>
                <div class="col btext">
                <button id="go" class="button-n" onClick={() => go()}>GO</button>
                </div>
            </div>
            </div>
        </div>
    );
    
  }
}