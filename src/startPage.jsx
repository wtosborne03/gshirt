'use strict';

class StartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div class="startpage">
            <div class="start-button">
                <button className='button1' onClick={() => start()}>START</button>
            </div>
        </div>
    );
  }
}