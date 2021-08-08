"use strict";

class OptionPage extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillUnmount() {
    settings.music = $('#music').is(":checked");
    settings.voice = $('#voice').is(":checked");
  }

  render() {
    return (
      <div class="rgrid">
          <div class="g g-top">
            <span class="bigtext">{place}<br/> ETA: {Math.floor(time / 60)}m {time - Math.floor(time /60) * 60}s</span>
            <div class="formbox">
              <input class="form-check-input" type="checkbox" value="" id="music" defaultChecked  />
              <label class="form-check-label" for="music">
                Background Music
              </label>
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="voice" defaultChecked  />
              <label class="form-check-label" for="voice">
                Voice Assistant
              </label>
            </div>
          </div>
          <div class="g g-left">
            <button class="bigbutton" onClick={() => {click.play(); ReactDOM.render(<LocationPage/>, main)}}>
                BACK
          </button>
          </div>
          <div class="g g-right">
            <button class="bigbutton" onClick={() => {click.play(); ReactDOM.render(<CountdownPage/>, main)}}>
                GO
          </button>
          </div>
      </div>
        
    );
  }
}
