'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    copyright: 'CalBre #01469441 Copyright © 2016 JoAnne Gilliam.',
    information: 'Information deemed reliable but not guaranteed or verified.',
    facebook: '//facebook.com',
    twitter: '//twitter.com',
    instagram: '//instagram'
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'FOOT_INIT':
      console.log(action);
      return state.set('copyright', action.copyright).set('information', action.information).set('facebook', action.facebook).set('twitter', action.twitter);
    default:
      return state;
  }
};