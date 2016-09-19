'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    open: false,
    data: [{
      name: 'HOME',
      link: '/',
      border: false,
      hover: false
    }, {
      name: 'PROPERTIES',
      border: true,
      hover: false,
      open: false,
      submenu: [{
        name: 'FEATURED',
        link: '#featured',
        hover: false,
        full: true
      }, {
        name: 'MLS SEARCH',
        link: 'http://idx.hklane.com/homesearch/51244',
        hover: false,
        full: true
      }, {
        name: 'OPEN HOMES',
        link: 'http://idx.hklane.com/openhomes/51244',
        hover: false,
        full: true
      }]
    }, {
      name: 'JO ANNE',
      link: '#about',
      border: true,
      hover: false
    }, {
      name: 'CONTACT',
      link: '#contact',
      border: true,
      hover: false
    }]
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'MENU_TOGGLE':
      return state.update('open', function (open) {
        return !open;
      });
    case 'MENU_CATEGORY_HOVER':
      return state.update('data', function (data) {
        return data.map(function (data, index) {
          return data.update('hover', function (hover) {
            return index === action.index && !hover;
          });
        });
      });
    case 'MENU_SUBMENU_HOVER_TOGGLE':
      return state.update('data', function (data) {
        return data.map(function (data, index) {
          return data.update('submenu', function (submenu) {
            return action.category !== index ? submenu : submenu.map(function (submenu, index) {
              return submenu.update('hover', function (hover) {
                return action.submenu === index && !hover;
              });
            });
          });
        });
      });
    case 'MENU_CATEGORY_TOGGLE':
      return state.update('data', function (data) {
        return data.map(function (data, index) {
          return data.update('open', function (open) {
            return index === action.index && !open;
          });
        });
      });
    default:
      return state;
  }
};