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
      { height: '100%', width: '100%', viewBox: '0 0 18 12' },
      _react2.default.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd', id: 'Page-1', stroke: 'none', strokeWidth: '1' },
        _react2.default.createElement(
          'g',
          { fill: color, id: 'Core', transform: 'translate(-87.000000, -342.000000)' },
          _react2.default.createElement(
            'g',
            { id: 'menu', transform: 'translate(87.000000, 342.000000)' },
            _react2.default.createElement('path', { d: 'M0,12 L18,12 L18,10 L0,10 L0,12 L0,12 Z M0,7 L18,7 L18,5 L0,5 L0,7 L0,7 Z M0,0 L0,2 L18,2 L18,0 L0,0 L0,0 Z', id: 'Shape' })
          )
        )
      )
    )
  );
};

exports.default = (0, _radium2.default)(MenuSVG);