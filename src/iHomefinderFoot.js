import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Store from './Store/Store';

import Radium, {StyleRoot} from 'radium';

//import Components
import Foot from './Components/Foot/Foot';

@Radium
class App extends Component {
  render(){
    return (
      <StyleRoot>
        <Foot />
      </StyleRoot>
    );
  }
};

export default App;

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('footApp')
);
