'use strict';

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Styles = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  base: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 0px'
  },
  wrapper: {
    display: 'block',
    margin: 'auto',
    width: '100%',
    maxWidth: '1440px',
    padding: '0px 10px'
  },
  header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '25px auto',
    '@media (min-width: 767px)': {
      margin: '25px auto'
    }
  },
  mls: {
    margin: '20px auto',
    border: '1px solid ' + (0, _color2.default)(_Styles.colors.forest).rgbString(),
    fontSize: '20px',
    padding: '15px 0px 13px',
    lineHeight: '15px',
    color: (0, _color2.default)(_Styles.colors.red).rgbString(),
    display: 'block',
    width: '250px',
    maxWidth: '100%',
    ':hover': {
      color: (0, _color2.default)(_Styles.colors.pink).rgbString()
    },
    '@media (min-width: 1024px)': {
      position: 'absolute',
      right: '0px',
      top: '0px',
      margin: '0px auto'
    }
  },
  carousel: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    width: '100%',
    height: '250px',
    padding: '0px',
    maring: '0px',
    overflow: 'hidden'
  }
};