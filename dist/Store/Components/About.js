'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    background: '',
    name: '',
    pic: {
      tablet: '',
      mobile: ''
    },
    markdown: ''
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'ABOUT_INIT':
      return state.set('background', action.background).set('name', action.name).setIn(['pic', 'tablet'], action.tablet).setIn(['pic', 'mobile'], action.mobile).set('markdown', action.markdown);
    default:
      return state;
  }
};