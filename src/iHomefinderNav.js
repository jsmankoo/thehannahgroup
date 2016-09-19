import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Store from './Store/Store';
import smoothScroll from 'smooth-scroll';

import Radium, {StyleRoot} from 'radium';

//import Components
import Nav from './Components/Nav/Nav';
import Menu from './Components/Menu/Menu';

@Radium
class App extends Component {
  render(){
    return (
      <StyleRoot>
        <Nav LinkOveride={true} />
        <Menu LinkOveride={true} />
      </StyleRoot>
    );
  }
};

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('navApp'),
  smoothScroll.init()
);
