var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var stylus = require('stylus');
var axis = require('axis');
var jeet = require('jeet');
var rupture = require('rupture');

var app = express();
var compiler = webpack(config);

app.set(`views`, `./views`);
app.set(`view engine`, `pug`);

app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: (str, path) => stylus(str)
      .set('filename', path)
      .use(axis())
      .use(jeet())
      .use(rupture())
  }
));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(`./public`));
app.use('/bower_components', express.static(`./bower_components`));

app.get('/ihomefinder', function(req, res) {
  res.render('ihomefinder');
});

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
