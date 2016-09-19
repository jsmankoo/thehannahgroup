'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuSVG = function MenuSVG(_ref) {
  var style = _ref.style;
  var onClick = _ref.onClick;
  var color = _ref.color;
  var onMouseOver = _ref.onMouseOver;
  var onMouseOut = _ref.onMouseOut;

  return _react2.default.createElement(
    'div',
    { className: 'MenuSVG', style: style, onClick: onClick, onMouseOver: onMouseOver, onMouseOut: onMouseOut },
    _react2.default.createElement(
      'svg',
      { height: '100%', width: '100%', viewBox: '0 0 14 14' },
      _react2.default.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', id: 'Page-1', stroke: 'none', strokeWidth: '1' },
        _react2.default.createElement(
          'g',
          { fill: color, id: 'Core', transform: 'translate(-341.000000, -89.000000)' },
          _react2.default.createElement(
            'g',
            { id: 'close', transform: 'translate(341.000000, 89.000000)' },
            _react2.default.createElement('path', { d: 'M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z', id: 'Shape' })
          )
        )
      )
    )
  );
};

exports.default = (0, _radium2.default)(MenuSVG);