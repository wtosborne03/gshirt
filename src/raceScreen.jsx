"use strict";

class RaceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.destination = props.destination;
    this.initdist = distance(oposition[0], oposition[1], eposition[1], eposition[0], "M");
    this.state = {time: props.time, miles: 0, percentage: 0};
    //this.initdist = distance(crd.latitude, crd.longitude, target.latitude, target.longitude, "M");
    console.log(this.state);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.geotrack();
    click.src='sfx/music.mp3';
    if (typeof click.loop == 'boolean')
        {
            click.loop = true;
        }
        else
        {
            click.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }
    click.play();
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({time: this.state.time -= 1});
  }
  geotrack() {
    var id, target, options;

    function success(pos) {
      var crd = pos.coords;
      dist = distance(crd.latitude, crd.longitude, target.latitude, target.longitude, "M");
      perc = relDiff(initdist, dist);
        this.setState({miles: dist, percentage: perc});
    }
    
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    
    target = {
      latitude : eposition[1],
      longitude: eposition[0]
    };
    
    options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };
    
    id = navigator.geolocation.watchPosition(success, error, options);
  }

  render() {
    return (
      <div class="rgrid">
          <div class="g-top">
            <span class="bigtext">{this.destination}</span>
          </div>
          <div class="g-under">
            <span class="bignumber">{Math.floor(this.state.time / 60)}m {this.state.time - Math.floor(this.state.time /60) * 60}s</span>

            
          </div>
          <div class="g-bar">
          <div class="progress-bar stripes animated reverse">
                <span class="progress-bar-inner" style={ { width: `${ this.state.percentage }%` } }></span>
            </div>
            <label>{this.state.miles} Miles Away</label>
            </div>
          <div class="g-left">{/*
            <button class="bigbutton" onClick={() => ReactDOM.render(<LocationPage/>, main)}>
                BACK
          </button>*/}
          </div>
      </div>
    );
  }
}
