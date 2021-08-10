"use strict";

class SuccessScreen extends React.Component {
  constructor(props) {
    super(props);
    this.place = props.place;
    this.time = props.time;
    this.coins = props.coins;
    this.canvas;
  }
  componentDidMount() {
    this.canvas = document.getElementById("can");
    var ctx = this.canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = document.getElementById("topmost").offsetHeight;
    var gradient = ctx.createLinearGradient(0,0,0,ctx.canvas.height);
    gradient.addColorStop(0, "rgb(0, 0, 0)");
    gradient.addColorStop(0.99, "rgb(121, 121, 121)");
    gradient.addColorStop(1, "rgb(122, 122, 122)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = "white";
    ctx.font = '36px serif';
    ctx.fillText('I got to ', 10, 50, this.canvas.width - 20);
    ctx.font = '48px serif';
    ctx.fillText(this.place, 10, 115, this.canvas.width - 20);
    ctx.font = '36px serif';
    ctx.fillText('faster than Google Maps by ' + this.time + '!', 10, 175, this.canvas.width - 20);
    ctx.font = 'bold 42px serif';
    ctx.fillStyle = "rgb(255, 204, 0)";
    ctx.fillText(this.coins + " SpeedCoins", 10, 280, this.canvas.width - 20);
  }
  save() {
    var s=this.canvas.toDataURL( "image/png" );
    var blob = dataURLtoBlob(s);
    const file = new File([blob], 'win.png', { type: blob.type });
    navigator.share({
      title: 'Win',
      text: 'Share your victory',
      files: [file],
    });
  }


  render() {
    return (
      <div class="rgrid">
        <div class="succpost">
        <canvas id="can" class="succpost"></canvas>
</div>
          <div class="g g-left">
            <button class="bigbutton" onClick={() => ReactDOM.render(<StartPage/>, main)}>
                Replay
          </button>
          </div>
          <div class="g g-right">
            <button class="bigbutton" onClick={() => this.save()}>
                Share
          </button>
          </div>
      </div>
    );
  }
}
