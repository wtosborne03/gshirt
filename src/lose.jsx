"use strict";

class LoseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.canvas;
  }
  componentDidMount() {
    this.canvas = document.getElementById("can");
    var ctx = this.canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = document.getElementById("topmost").offsetHeight;
    var gradient = ctx.createLinearGradient(0,0,0,ctx.canvas.height);
    gradient.addColorStop(0, "rgb(255, 255, 255)");
    gradient.addColorStop(0.99, "rgb(121, 121, 121)");
    gradient.addColorStop(1, "rgb(122, 122, 122)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = "red";
    ctx.font = '36px serif';
    ctx.fillText('You Lost to Google Maps', 10, 50, this.canvas.width - 20);

    click.pause();
    click.currentTime = 0;
    click.src="sfx/lose.mp3";
    click.play();
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
      </div>
    );
  }
}
