'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _App = require('./Components/App');

var _App2 = _interopRequireDefault(_App);

var _Nav = require('./Components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Menu = require('./Components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Jumbotron = require('./Components/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Featured = require('./Components/Featured');

var _Featured2 = _interopRequireDefault(_Featured);

var _About = require('./Components/About');

var _About2 = _interopRequireDefault(_About);

var _Contact = require('./Components/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _Foot = require('./Components/Foot');

var _Foot2 = _interopRequireDefault(_Foot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  App: _App2.default,
  Nav: _Nav2.default,
  Menu: _Menu2.default,
  Jumbotron: _Jumbotron2.default,
  Featured: _Featured2.default,
  About: _About2.default,
  Contact: _Contact2.default,
  Foot: _Foot2.default
});

var Store = (0, _redux.createStore)(reducer);

exports.default = Store;