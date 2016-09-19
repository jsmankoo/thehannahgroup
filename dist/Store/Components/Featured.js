'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    mlsLink: 'http://idx.hklane.com/homesearch/51244',
    properties: []
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'FEATURED_LINK_INIT':
      return state.set('mlsLink', action.link);
    case 'FEATURED_ADD_PROPERTY':
      return state.update('properties', function (properties) {
        return properties.push((0, _immutable.fromJS)({
          photo: action.photo,
          address: action.address,
          price: action.price,
          link: action.link
        }));
      });
    default:
      return state;
  }
};