"use strict";

class OptionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container " id="p3">
        <div class="row scom">
          <div class="col">
            <span id="dest">Destination: </span>
          </div>
          <div class="col">
            <span id="eta">45 minutes </span>
          </div>
        </div>
        <div class="row scom">
          <div class="col">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexSwitchCheckChecked">
                Music
              </label>
            </div>
          </div>
        </div>
        <div class="overtext container mw-100">
          <div class="row">
            <div class="col btext">
              <button id="begin" class="button-n" onClick={() => {click.play(); ReactDOM.render(<LocationPage/>, main)}}>
                BACK
              </button></div>
            <div class="col btext">
              <button id="begin" class="button-n" onClick={() => {click.play(); ReactDOM.render(<CountdownPage/>, main)}}>
                GO
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
