import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Store from './Store/Store';
import smoothScroll from 'smooth-scroll';

import App from './Components/App/App';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('rootApp'),
  smoothScroll.init()
);
