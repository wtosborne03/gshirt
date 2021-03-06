"use strict";

class RaceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.destination = props.destination;
    this.initdist = distance(oposition.latitude, oposition.longitude, eposition[1], eposition[0], "M");
    console.log(this.initdist);
    this.state = {time: props.time, miles: this.initdist, percentage: 0, speed: travel.speed, progress: 0};
    this.db = React.createRef();
    //this.initdist = distance(crd.latitude, crd.longitude, target.latitude, target.longitude, "M");
    console.log(this.state);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.geotrack();
    if (settings.music) {
      click.src='sfx/music.mp3';
      if (typeof click.loop == 'boolean')
          {
              click.loop = true;
          }
      click.play();
    }
  }
  

  componentWillUnmount() {
    click.loop = false;
    click.pause();
    click.currentTime = 0;
    click.src="sfx/click.mp3";
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({progress: this.state.progress + (100/time)});
    this.setState({time: this.state.time -= 1});
    if (this.state.time <= 0) {
      ReactDOM.render(<LoseScreen/>, main);
    }
  }
  win() {
    ReactDOM.render(<SuccessScreen coins={this.db.state.coins} place={this.destination} time={Math.floor(this.state.time / 60) + "m" + this.state.time - Math.floor(this.state.time /60) * 60 + "s"} />, main)
  }
  geotrack() {
    var id, target, options;
    function success(pos, ctx) {
      var crd = pos.coords;
      travel.location = pos.coords;
      if (pos.coords.speed != null) {
        travel.speed = pos.coords.speed * 2.23694;
      }
      var dist = distance(crd.latitude, crd.longitude, target.latitude, target.longitude, "M");
      var perc = (0 - (dist * (100 / ctx.initdist))) + 100;
        ctx.setState({miles: dist, percentage: perc, speed: travel.speed});
        console.log(ctx.state);
      if (dist < 0.09) {
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
  

  render() {
    return (
      <div class="rgrid">
        <DriveBuddy ref={this.db}/>
          <div class="g g-top">
            <span class="bigtext">{this.destination}</span><br/>
            <span class="bignumber">{Math.floor(this.state.time / 60)}m {this.state.time - Math.floor(this.state.time /60) * 60}s</span>
          </div>
          <div class="g g-bottom">
            <span class="bignumber">{Math.round(this.state.speed)} MPH</span>
            <div class="progress-bar com-bar stripes animated reverse">
                <span class="progress-bar-inner com-inner" style={ { width: `${ this.state.progress }%` } }></span>
            </div>
            <div class="progress-bar stripes animated reverse"><span class="ptext">Progress</span>
                <span class="progress-bar-inner" style={ { width: `${ this.state.percentage }%` } }></span>

            </div>
            <label>{Math.round(this.state.miles * 10) /10} Miles Away</label>
          </div>
      </div>
    );
  }
}
