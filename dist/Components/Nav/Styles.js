'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Styles = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  base: {
    zIndex: 10000,
    width: '100%',
    height: '50px',
    position: 'fixed',
    top: '0px',
    backgroundColor: (0, _color2.default)(_Styles.colors.red).clearer(0.25).rgbString()
  },
  brand: _extends({}, (0, _Styles.align)('b'), {
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '20px',
    fontFamily: 'etica',
    '@media (min-width: 767px)': {
      fontSize: '30px',
      lineHeight: '16px'
    }
  }),
  icon: _extends({}, (0, _Styles.align)('v'), {
    width: '30px',
    height: 'auto',
    cursor: 'pointer'
  })
};