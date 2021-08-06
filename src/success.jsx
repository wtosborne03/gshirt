"use strict";

class SuccessScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {


  }


  render() {
    return (
      <div class="rgrid">
          <div class="g-top">
            <span class="bigtext" style = { { 'font-size': '2em' }  }>I got to Walgreens, 5220 Sunset Blvd faster than Google Maps by:</span>
          </div>
          <div class="g-under">
            <span class="bignumber">4m 5s</span>

            
          </div>
          <div class="g-bar">
          <img src="https://img.icons8.com/flat-round/64/000000/star--v1.png"/>
          <img src="https://img.icons8.com/flat-round/64/000000/star--v1.png"/>
          <img src="https://img.icons8.com/flat-round/64/000000/star--v1.png"/>
          </div>
          <div class="g-left">
            <button class="bigbutton" onClick={() => ReactDOM.render(<StartPage/>, main)}>
                Replay
          </button>
          </div>
          <div class="g-right">
            <button class="bigbutton" onClick={() => navigator.share()}>
                Share
          </button>
          </div>
      </div>
    );
  }
}
