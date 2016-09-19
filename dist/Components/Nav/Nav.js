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

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Menu = require('./Menu.svg');

var _Menu2 = _interopRequireDefault(_Menu);

var _Close = require('./Close.svg');

var _Close2 = _interopRequireDefault(_Close);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

var _Styles3 = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(_ref) {
  var brand = _ref.brand;
  var hover = _ref.hover;
  var onHover = _ref.onHover;
  var open = _ref.open;
  var toggle = _ref.toggle;
  var iconHover = _ref.iconHover;
  var iconOnHover = _ref.iconOnHover;
  var LinkOveride = _ref.LinkOveride;

  return _react2.default.createElement(
    'div',
    { className: 'Nav', style: [_Styles.base] },
    _react2.default.createElement(
      _reactMotion.Motion,
      { style: {
          letterSpacing: hover ? (0, _reactMotion.spring)(6, _reactMotion.presets.gentle) : (0, _reactMotion.spring)(4, _reactMotion.presets.gentle)
        } },
      function (_ref2) {
        var letterSpacing = _ref2.letterSpacing;
        return _react2.default.createElement(
          'a',
          {
            onMouseOver: onHover,
            onMouseOut: onHover,
            className: 'H3',
            href: LinkOveride ? 'http://www.premieroceanfrontproperties.com/' : '/',
            style: [_Styles2.default.brand, {
              letterSpacing: letterSpacing + 'px',
              color: hover ? (0, _color2.default)(_Styles3.colors.black).rgbString() : (0, _color2.default)(_Styles3.colors.white).rgbString()
            }]
          },
          brand
        );
      }
    ),
    _react2.default.createElement(
      _reactMotion.Motion,
      { style: {
          menu: !open ? (0, _reactMotion.spring)(20, _reactMotion.presets.gentle) : (0, _reactMotion.spring)(-40, _reactMotion.presets.gentle),
          close: open ? (0, _reactMotion.spring)(20, _reactMotion.presets.gentle) : (0, _reactMotion.spring)(-40, _reactMotion.presets.gentle)
        } },
      function (_ref3) {
        var menu = _ref3.menu;
        var close = _ref3.close;
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Menu2.default, {
            onMouseOver: iconOnHover,
            onMouseOut: iconOnHover,
            onClick: toggle,
            style: [_Styles2.default.icon, {
              right: menu + 'px'
            }],
            color: iconHover ? (0, _color2.default)(_Styles3.colors.black).rgbString() : (0, _color2.default)(_Styles3.colors.white).rgbString()
          }),
          _react2.default.createElement(_Close2.default, {
            onMouseOver: iconOnHover,
            onMouseOut: iconOnHover,
            onClick: toggle,
            style: [_Styles2.default.icon, {
              right: close + 'px',
              width: '20px'
            }],
            color: iconHover ? (0, _color2.default)(_Styles3.colors.black).rgbString() : (0, _color2.default)(_Styles3.colors.white).rgbString()
          })
        );
      }
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref4) {
  var Nav = _ref4.Nav;
  var Menu = _ref4.Menu;

  return {
    brand: Nav.get('brand'),
    hover: Nav.get('hover'),
    open: Menu.get('open'),
    iconHover: Nav.get('iconHover')
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onHover: function onHover() {
      dispatch({ type: 'NAV_BRAND_HOVER' });
    },
    toggle: function toggle() {
      dispatch({ type: 'MENU_TOGGLE' });
    },
    iconOnHover: function iconOnHover() {
      dispatch({ type: 'NAV_BRAND_ICON_HOVER' });
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Nav));