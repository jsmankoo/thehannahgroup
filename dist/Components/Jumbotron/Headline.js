'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactMotion = require('react-motion');

var _reactRedux = require('react-redux');

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Headline = function Headline(_ref) {
  var headline = _ref.headline;
  var subheadline = _ref.subheadline;
  var load = _ref.load;

  return _react2.default.createElement(
    _reactMotion.StaggeredMotion,
    {
      defaultStyles: [{
        transform: 200,
        opacity: 0
      }, {
        transform: 200,
        opacity: 0
      }],
      styles: function styles(_styles) {
        return _styles.map(function (_, i) {
          return i === 0 ? {
            transform: load ? (0, _reactMotion.spring)(0, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(200, _reactMotion.presets.noWobble),
            opacity: load ? (0, _reactMotion.spring)(1, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(0, _reactMotion.presets.noWobble)
          } : {
            transform: (0, _reactMotion.spring)(_styles[i - 1].transform, { stiffness: 100, damping: 40 }),
            opacity: (0, _reactMotion.spring)(_styles[i - 1].opacity, _reactMotion.presets.noWobble)
          };
        });
      }
    },
    function (styles) {
      return _react2.default.createElement(
        'div',
        { style: [_Styles2.default.headline] },
        _react2.default.createElement(
          'h1',
          { style: [{
              transform: 'translate(0%, ' + styles[0].transform + '%)',
              opacity: styles[0].opacity,
              fontSize: '35px',
              lineHeight: '40px',
              '@media (min-width: 768px)': {
                fontSize: '60px',
                lineHeight: '70px'
              },
              '@media (min-width: 1024px)': {
                fontSize: '75px',
                lineHeight: '85px'
              }
            }] },
          headline
        ),
        _react2.default.createElement(
          'h5',
          { style: [{
              transform: 'translate(0%, ' + styles[1].transform + '%)',
              opacity: styles[1].opacity,
              fontSize: '14px',
              lineHeight: '20px',
              '@media (min-width: 768px)': {
                fontSize: '20px',
                lineHeight: '30px'
              }
            }] },
          subheadline
        )
      );
    }
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Headline));