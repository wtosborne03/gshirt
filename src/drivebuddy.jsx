"use strict";

class DriveBuddy extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Christopher Weston Chandler";
    this.coins = 0;
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
    setTimeout(() => {
        speak('Welcome to Race Google Maps, I will be your host, ' + this.name + '. I must say, you are looking submissive and breedable this evening.');
      }, 3000 + (Math.random() * 7));
    setTimeout(() => {
        this.speedcoin();
      }, 20000 + (Math.random() * 7));
  }
  

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    
  }
  speedcoin() {
    var initspeed = travel.speed;
    var speedchange = 15;
    var coins = 3;
    speak('Speed up ' + speedchange + ' miles an hour in 10 seconds to collect ' + coins + ' speedcoins');
    setTimeout(() => {
        if (travel.speed >= (initspeed + speedchange -1)) {
            this.coins += coins;
            speak('Good Job! You now have ' + this.coins + ' speedcoins');
        } else {
            speak('I guess you did not want to go ' + (initspeed + speedchange) + ' miles an hour there');
        }
      }, 14000);
      setTimeout(() => {
        this.speedcoin();
      }, 80000 + (Math.random() * 7));
  }
  
  getmaxspeed() {
    var request = new XMLHttpRequest();
    var x = travel.location.longitude;
    var y = travel.location.latitude;
    var radius = 0.05;
    request.open('GET', 'https://z.overpass-api.de/api/xapi?*[maxspeed=*][bbox=' + (y-(radius/2)) + ',' + (x-(radius/2)) + ',' + (y+(radius/2)) + ',' + (x+(radius/2)) + ']', false);  // `false` makes the request synchronous
    request.send(null);
    
    if (request.status === 200) {
      console.log(request.responseText);
    }
  }
  render() {
    return (
        <div id="db">

        </div>
    );
  }
}
