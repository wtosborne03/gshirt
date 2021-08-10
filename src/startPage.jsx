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
            <div class="bottomtext">
                I am not responsible for any inherent injuries caused by using this software. I am not responsible for loss of life or damage to property.
                
            </div>
        </div>
        
    );
  }
}