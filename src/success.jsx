"use strict";

class SuccessScreen extends React.Component {
  constructor(props) {
    super(props);
    this.place = props.place;
    this.time = props.time;
  }
  componentDidMount() {
    document.getElementById("svg1").contentDocument.getElementById('p-time').innerHTML = this.time;
    document.getElementById("svg1").contentDocument.getElementById('p-place1').innerHTML = this.place;

  }
  save() {
    var svg = document.getElementById("svg1").contentDocument.getElementById('loveit');
    console.log(svg);
    var svgData = new XMLSerializer().serializeToString( svg );

    var canvas = document.createElement( "canvas" );
    var ctx = canvas.getContext( "2d" );
    ctx.canvas.width  = window.innerWidth;
     ctx.canvas.height = window.innerHeight;

    var img = document.createElement( "img" );
    img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );

    img.onload = function() {
        ctx.drawImage( img, 0, 0 );
        
        // Now is done
        var s=canvas.toDataURL( "image/png" );
        var blob = dataURLtoBlob(s);
        const file = new File([blob], 'fileName.png', { type: blob.type });
        navigator.share({
          title: 'Win',
          text: 'Share your victory',
          files: [file],
        })
    };
  }


  render() {
    return (
      <div class="rgrid">
        <div class="succpost">
        <object type="image/svg+xml" data="poster.svg" id="svg1" class="succpost"></object>
</div>
          <div class="g-left">
            <button class="bigbutton" onClick={() => ReactDOM.render(<StartPage/>, main)}>
                Replay
          </button>
          </div>
          <div class="g-right">
            <button class="bigbutton" onClick={() => this.save()}>
                Share
          </button>
          </div>
      </div>
    );
  }
}
