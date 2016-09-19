'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRedux = require('react-redux');

var _reactMotion = require('react-motion');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _Styles = require('./Styles');

var _Styles2 = require('../../Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Submenu = function Submenu(_ref) {
  var open = _ref.open;
  var data = _ref.data;
  var category = _ref.category;
  var onHover = _ref.onHover;
  var toggleMenu = _ref.toggleMenu;
  var LinkOveride = _ref.LinkOveride;

  if (!data) return _react2.default.createElement('div', null);

  return _react2.default.createElement(
    _reactMotion.Motion,
    { style: {
        height: open ? (0, _reactMotion.spring)(40 * data.length, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(0, _reactMotion.presets.noWobble)
      } },
    function (_ref2) {
      var height = _ref2.height;
      return _react2.default.createElement(
        'div',
        { style: [_Styles.submenu.base, {
            height: height + 'px',
            overflow: 'hidden',
            '@media (min-width: 768px)': {
              height: 'auto',
              overflow: 'none'
            }
          }] },
        data.map(function (_ref3, index) {
          var name = _ref3.name;
          var link = _ref3.link;
          var hover = _ref3.hover;
          var full = _ref3.full;
          return _react2.default.createElement(
            _reactMotion.Motion,
            { key: name, style: {
                background: hover ? 0 : 1,
                color: hover ? (0, _reactMotion.spring)(0, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(1, _reactMotion.presets.noWobble),
                letterSpacing: hover ? (0, _reactMotion.spring)(4, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(2, _reactMotion.presets.noWobble)
              } },
            function (_ref4) {
              var background = _ref4.background;
              var color = _ref4.color;
              var letterSpacing = _ref4.letterSpacing;
              return full || LinkOveride ? _react2.default.createElement(
                'a',
                {
                  className: 'H4',
                  href: !full && LinkOveride && link ? 'http://www.premieroceanfrontproperties.com/' + link : link,
                  onMouseOver: onHover(category, index),
                  onMouseOut: onHover(category, index),
                  onClick: toggleMenu,
                  style: [_Styles.submenu.a, {
                    color: (0, _color2.default)(_Styles2.colors.red).lighten(color).rgbString(),
                    backgroundColor: (0, _color2.default)(_Styles2.colors.white).clearer(background).rgbString(),
                    letterSpacing: letterSpacing + 'px'
                  }]
                },
                name
              ) : _react2.default.createElement(
                'a',
                {
                  'data-scroll': true,
                  className: 'H4',
                  href: link && link,
                  onMouseOver: onHover(category, index),
                  onMouseOut: onHover(category, index),
                  onClick: toggleMenu,
                  style: [_Styles.submenu.a, {
                    color: (0, _color2.default)(_Styles2.colors.blue).lighten(color).rgbString(),
                    backgroundColor: (0, _color2.default)(_Styles2.colors.white).clearer(background).rgbString(),
                    letterSpacing: letterSpacing + 'px'
                  }]
                },
                name
              );
            }
          );
        })
      );
    }
  );
};

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onHover: function onHover(category, submenu) {
      return function () {
        dispatch({
          type: 'MENU_SUBMENU_HOVER_TOGGLE',
          category: category,
          submenu: submenu
        });
      };
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Submenu));