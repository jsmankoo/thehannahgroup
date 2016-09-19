'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    brand: 'The Hannah Group',
    hover: false,
    iconHover: false
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'NAV_BRAND_HOVER':
      return state.update('hover', function (hover) {
        return !hover;
      });
    case 'NAV_BRAND_ICON_HOVER':
      return state.update('iconHover', function (hover) {
        return !hover;
      });
    default:
      return state;
  }
};