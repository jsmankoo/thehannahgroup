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

var _Category = require('./Category');

var _Category2 = _interopRequireDefault(_Category);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var open = _ref.open;
  var LinkOveride = _ref.LinkOveride;
  var data = _ref.data;
  var categoryOnHover = _ref.categoryOnHover;
  var categoryToggle = _ref.categoryToggle;
  var toggleMenu = _ref.toggleMenu;

  return _react2.default.createElement(
    'div',
    { className: 'Menu' },
    _react2.default.createElement(
      _reactMotion.Motion,
      { style: {
          transform: open ? (0, _reactMotion.spring)(100, _reactMotion.presets.gentle) : (0, _reactMotion.spring)(0, _reactMotion.presets.gentle)
        } },
      function (_ref2) {
        var transform = _ref2.transform;
        return _react2.default.createElement(
          'div',
          { style: [_Styles.base, {
              transform: 'translate(' + (100 - transform) + '%, 0%)'
            }] },
          _react2.default.createElement(
            _reactMotion.StaggeredMotion,
            {
              defaultStyles: data.map(function () {
                return { transform: 100 };
              }),
              styles: function styles(_styles) {
                return _styles.map(function (style, index) {
                  return index === 0 ? { transform: open ? (0, _reactMotion.spring)(0, _reactMotion.presets.gentle) : (0, _reactMotion.spring)(100, _reactMotion.presets.gentle) } : { transform: (0, _reactMotion.spring)(_styles[index - 1].transform, _reactMotion.presets.gentle) };
                });
              }
            },
            function (styles) {
              return _react2.default.createElement(
                'div',
                null,
                data.map(function (_ref3, index) {
                  var name = _ref3.name;
                  var link = _ref3.link;
                  var open = _ref3.open;
                  var border = _ref3.border;
                  var hover = _ref3.hover;
                  var submenu = _ref3.submenu;
                  return _react2.default.createElement(_Category2.default, {
                    style: {
                      transform: 'translate(' + styles[index].transform + '%, 0%)'
                    },
                    toggleMenu: toggleMenu,
                    open: open,
                    name: name,
                    link: link,
                    border: border,
                    hover: hover,
                    key: index,
                    submenu: submenu,
                    index: index,
                    LinkOveride: LinkOveride,
                    onClick: categoryToggle(index),
                    onMouseOver: categoryOnHover(index),
                    onMouseOut: categoryOnHover(index) });
                })
              );
            }
          )
        );
      }
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref4) {
  var Menu = _ref4.Menu;

  return {
    open: Menu.get('open'),
    data: Menu.get('data').toJS()
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    categoryOnHover: function categoryOnHover(index) {
      return function () {
        return dispatch({ type: 'MENU_CATEGORY_HOVER', index: index });
      };
    },
    categoryToggle: function categoryToggle(index) {
      return function () {
        return dispatch({
          type: 'MENU_CATEGORY_TOGGLE',
          index: index
        });
      };
    },
    toggleMenu: function toggleMenu() {
      dispatch({ type: 'MENU_TOGGLE' });
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Menu));