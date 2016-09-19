'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    videos: ['/media/video.mp4', '/media/video.webm'],
    poster: '/media/poster.jpg',
    slides: ['/img/poster.jpg'],
    headline: 'BIG HEADLINE',
    subheadline: 'Goes Here'
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};