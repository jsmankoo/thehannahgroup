import express from 'express';
import morgan from 'morgan';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';

import stylus from 'stylus';
import axis from 'axis';
import jeet from 'jeet';
import rupture from 'rupture';

import App from './Components/App/App';
import Store from './Store/Store';

// Init express
let app = express();

app.set(`port`, process.env.NODE_PORT || 3000);
app.set(`ip`, process.env.NODE_IP || `localhost`);

app.set(`views`, `./views`);
app.set(`view engine`, `pug`);

app.use(require('prerender-node').set('prerenderToken', 'LcbdRRMIV9UNSYL9NdKk'));
app.use(morgan(`combined`));

app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: (str, path) => stylus(str)
      .set('filename', path)
      .use(axis())
      .use(jeet())
      .use(rupture())
  }
))

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use(express.static(`./public`));

app.get(`/`, function(req, res){
  res.render(`index`, {app: renderToString(
    <Provider store={Store}>
      <App />
    </Provider>
  )});
});

app.get(`/ihomefinder`, function(req, res){
  res.render(`ihomefinder`);
});

app.listen(app.get(`port`), app.get(`ip`), function(){
  console.log('Application ip ' + app.get(`ip`) + ':' + app.get(`port`));
  console.log('worker ' + process.pid + 'started...');
});
