'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Styles = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  base: {
    display: 'block',
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    clipPath: 'polygon(50% 3%, 100% 0, 100% 97%, 50% 100%, 0 97%, 0 0)',
    overflow: 'hidden',
    '@media (min-width: 767px)': {
      clipPath: 'polygon(50% 7%, 100% 0, 100% 93%, 50% 100%, 0 93%, 0 0)'
    }
  },
  tint: {
    backgroundColor: (0, _color2.default)(_Styles.colors.white).clearer(0.10).rgbString(),
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 0px',
    textAlign: 'center'
  },
  header: _extends({}, _Styles.header, {
    margin: '0 0 25px'
  }),
  row: {
    width: '100%',
    maxWidth: '768px',
    height: 'auto',
    display: '-webkit-flex',
    flexDirection: 'column',
    padding: '0px 20px',
    '@media (min-width: 767px)': {
      flexDirection: 'row'
    }
  },
  img: {
    mobile: {
      margin: '20px auto',
      '@media (min-width: 767px)': {
        display: 'none'
      }
    },
    tablet: {
      display: 'none',
      height: '350px',
      width: '291px',
      margin: '0 auto',
      '@media (min-width:767px)': {
        display: 'block',
        marginRight: '20px'
      }
    }
  },
  markdown: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    '@media (min-width: 767px)': {
      position: 'relative',
      top: '-15px',
      width: '60%',
      textAlign: 'left'
    }
  }
};