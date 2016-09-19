'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Styles = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  base: {
    zIndex: 10000,
    position: 'fixed',
    top: '51px',
    right: '0px',
    width: '100%',
    height: 'auto',
    '@media (min-width: 768px)': {
      top: '50px',
      width: '300px',
      height: '100%',
      backgroundColor: (0, _color2.default)(_Styles.colors.red).clearer(0.25).rgbString()
    }
  },
  category: {
    backgroundColor: (0, _color2.default)(_Styles.colors.red).clearer(0.25).rgbString(),
    '@media (min-width: 768px)': {
      backgroundColor: 'transparent'
    },
    a: {
      display: 'block',
      width: '100%',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'left',
      paddingLeft: '20px',
      position: 'relative',
      fontSize: '20px'
    },
    i: _extends({}, (0, _Styles.align)('v'), {
      fontSize: '30px',
      right: '20px',
      display: 'block',
      '@media (min-width: 768px)': {
        display: 'none'
      }
    })
  },
  border: {
    width: '100%',
    height: '1px',
    marginLeft: '0px',
    backgroundColor: (0, _color2.default)(_Styles.colors.white).rgbString(),
    '@media (min-width: 768px)': {
      width: '150px',
      marginLeft: '40px'
    }
  },
  submenu: {
    a: {
      display: 'block',
      width: '100%',
      height: '40px',
      lineHeight: '40px',
      textAlign: 'left',
      paddingLeft: '40px',
      position: 'relative',
      fontSize: '16px',
      '@media (min-width: 768px)': {
        height: '40px',
        lineHeight: '40px'
      }
    }
  }
};