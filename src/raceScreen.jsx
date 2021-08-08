"use strict";

class RaceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.destination = props.destination;
    this.initdist = distance(oposition.latitude, oposition.longitude, eposition[1], eposition[0], "M");
    console.log(this.initdist);
    this.state = {time: props.time, miles: this.initdist, percentage: 0};
    //this.initdist = distance(crd.latitude, crd.longitude, target.latitude, target.longitude, "M");
    console.log(this.state);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.trackspeech();
    this.geotrack();
    if (settings.music) {
      click.src='sfx/music.mp3';
      if (typeof click.loop == 'boolean')
          {
              click.loop = true;
          }
      click.play();
    }
    setTimeout(() => {
      speak('Welcome to Race Google Maps, I will be your host, Alex.')
    }, 3000 + (Math.random() * 7));
  }
  

  componentWillUnmount() {
    click.loop = false;
    click.pause();
    click.currentTime = 0;
    click.src="sfx/click.mp3";
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({time: this.state.time -= 1});
  }
  win() {
    ReactDOM.render(<SuccessScreen place={this.destination} time={Math.floor(this.state.time / 60) + "m" + this.state.time - Math.floor(this.state.time /60) * 60 + "s"} />, main)
  }
  geotrack() {
    var id, target, options;
    function success(pos, ctx) {
      var crd = pos.coords;
      var dist = distance(crd.latitude, crd.longitude, target.latitude, target.longitude, "M");
      var perc = (0 - (dist * (100 / ctx.initdist))) + 100;
        ctx.setState({miles: dist, percentage: perc});
        console.log(ctx.state);
      if (perc/100 > 0.99) {
        ctx.win();
      }
    }
    
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    
    target = {
      latitude : eposition[1],
      longitude: eposition[0]
    };
    
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 200
    };
    
    id = navigator.geolocation.watchPosition((pos) => {success(pos, this)}, error, options);
  }
  trackspeech() {
    recognition.onresult = function(event){
  
      // delve into words detected results & get the latest
      // total results detected
      var resultsLength = event.results.length -1 ;
      // get length of latest results
      var ArrayLength = event.results[resultsLength].length -1;
      // get last word detected
      if(event.results[resultsLength].isFinal) {
        if (event.results[resultsLength][0].transcript.substring(0,8) == "Hey Alex") {
          speak('Yes?');
        }
      }
      console.log(event.results[resultsLength]);
    }
    
    // speech error handling
    recognition.onerror = function(event){
      console.log('error?');
      console.log(event);
    }
  }

  render() {
    return (
      <div class="rgrid">
          <div class="g g-top">
            <span class="bigtext">{this.destination}</span><br/>
            <span class="bignumber">{Math.floor(this.state.time / 60)}m {this.state.time - Math.floor(this.state.time /60) * 60}s</span>
          </div>
          <div class="g g-bottom">
            <div class="progress-bar stripes animated reverse">
                <span class="progress-bar-inner" style={ { width: `${ this.state.percentage }%` } }></span>
            </div>
            <label>{Math.round(this.state.miles * 10) /10} Miles Away</label>
          </div>
      </div>
    );
  }
}
