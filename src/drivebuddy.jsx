"use strict";

class DriveBuddy extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Christopher Weston Chandler";
    this.state = {coins: 0};
    this.greetings=[
      'Hello',
      'Hi',
      'Hiya',
      'Hey',
      'What\'s up',
      'Howdy',
      'Hey there',
      'Howdy-do',
    ];
    this.remarks = [
      'I am a dog, I like to run, I like to run fast',
      'I love the Olympics',
      'I like to run',
      'I like to run fast and run slow',
      'I will get you to your destination.',
      'I love driving off the beaten path.',
      'The world is beautiful.'
    ];
    this.sorry = [
      "Sorry, you weren't fast enough.",
      "Looks like you were too slow.",
      "I don't think you were fast enough.",
      "You didn't make the cut.",
      "Wow, were being really cautious today, huh?"
    ];
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
    setTimeout(() => {
        speak(this.greetings[Math.floor(Math.random()*this.greetings.length)] +
         ', Welcome to Race Google Maps, I will be your host, ' + this.name +
          '. ' + this.remarks[Math.floor(Math.random()*this.remarks.length)]);
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
    var speedchange = getRandomInt(7, 16);
    var coins = getRandomInt(2, 6);
    speak('Speed up to ' + (Math.round(initspeed + speedchange) + 1) + ' miles an hour in 10 seconds to collect ' + coins + ' speedcoins');
    setTimeout(() => {
        if (travel.speed >= (initspeed + speedchange -1)) {
            this.setState({coins: this.state.coins + coins});
            speak('Good Job! You now have ' + this.state.coins + ' speedcoins');
        } else {
            speak(this.sorry[Math.floor(Math.random()*this.sorry.length)]);
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
          <div class="db-header">
            {this.state.coins}
            </div>
        </div>
    );
  }
}
