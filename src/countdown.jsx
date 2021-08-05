"use strict";

class CountdownPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="d-flex justify-content-center">
        <span class="count">3</span>
      </div>
    );
  }
  componentDidMount()  {
      this.countdown();
      
  }
  countdown() {
    var i = 3;
    var inter = setInterval(function(){
        $('.count').text(i);
        i--;
        if (i < 0) {
            clearInterval(inter);
            ReactDOM.render(<RaceScreen destination={place} time={time} />, main);
        }
    }, 1000);
  }
}
