'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Styles = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  base: {
    clipPath: 'polygon(100% 0, 100% 93%, 50% 100%, 0 93%, 0 0)',
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    '@media (max-width: 1024px) and (min-width: 767px)': {
      height: '768px'
    }
  },
  videos: _extends({}, (0, _Styles.align)('v'), {
    minWidth: '100%',
    minHeight: '100%',
    zIndex: -10000
  }),
  tint: {
    height: '100%',
    width: '100%',
    backgroundColor: (0, _color2.default)(_Styles.colors.black).clearer(0.75).hslString()
  },
  headline: _extends({}, (0, _Styles.align)('v'), {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    color: (0, _color2.default)(_Styles.colors.white).rgbString()
  })
};