'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Submenu = require('./Submenu');

var _Submenu2 = _interopRequireDefault(_Submenu);

var _Styles = require('../../Styles');

var _Styles2 = require('./Styles');

var _Styles3 = _interopRequireDefault(_Styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Category = function Category(_ref) {
  var name = _ref.name;
  var LinkOveride = _ref.LinkOveride;
  var open = _ref.open;
  var hover = _ref.hover;
  var onMouseOver = _ref.onMouseOver;
  var onMouseOut = _ref.onMouseOut;
  var link = _ref.link;
  var border = _ref.border;
  var submenu = _ref.submenu;
  var index = _ref.index;
  var style = _ref.style;
  var toggleMenu = _ref.toggleMenu;

  var rest = _objectWithoutProperties(_ref, ['name', 'LinkOveride', 'open', 'hover', 'onMouseOver', 'onMouseOut', 'link', 'border', 'submenu', 'index', 'style', 'toggleMenu']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'Category', style: [_Styles2.category, style] }, rest),
    _react2.default.createElement('div', { style: [!hover && border && _Styles3.default.border] }),
    _react2.default.createElement(
      _reactMotion.Motion,
      { style: {
          background: hover ? 0 : 1,
          color: hover ? (0, _reactMotion.spring)(0, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(1, _reactMotion.presets.noWobble),
          letterSpacing: hover ? (0, _reactMotion.spring)(6, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(3, _reactMotion.presets.noWobble)
        } },
      function (_ref2) {
        var background = _ref2.background;
        var color = _ref2.color;
        var letterSpacing = _ref2.letterSpacing;
        return _react2.default.createElement(
          'a',
          {
            onMouseOut: onMouseOut,
            onMouseOver: onMouseOver,
            className: 'H3',
            onClick: link && toggleMenu,
            href: link,
            style: [_Styles2.category.a, {
              backgroundColor: (0, _color2.default)(_Styles.colors.white).clearer(background).rgbString(),
              color: (0, _color2.default)(_Styles.colors.red).lighten(color).rgbString(),
              letterSpacing: letterSpacing + 'px'
            }]
          },
          name,
          submenu && _react2.default.createElement(
            _reactMotion.Motion,
            { style: {
                rotate: open ? (0, _reactMotion.spring)(180, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(0, _reactMotion.presets.noWobble)
              } },
            function (_ref3) {
              var rotate = _ref3.rotate;
              return _react2.default.createElement('i', { className: 'fa fa-angle-down', style: [_Styles2.category.i, {
                  transform: 'translate(0%, -50%) rotate(' + rotate + 'deg)'
                }] });
            }
          )
        );
      }
    ),
    _react2.default.createElement(_Submenu2.default, { LinkOveride: LinkOveride, data: submenu, category: index, open: open, toggleMenu: toggleMenu })
  );
};

exports.default = (0, _radium2.default)(Category);