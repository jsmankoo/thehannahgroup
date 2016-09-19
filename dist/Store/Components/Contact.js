'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    name: 'REAL ESTATE QUESTIONS?',
    markdown: '### Generic Headingn\nsome paragraph',
    mobile: {
      link: '',
      text: ''
    },
    email: {
      link: '',
      text: ''
    },
    address: {
      link: '',
      text: ''
    }
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CONTACT_INIT':
      return state.set('name', action.name).set('markdown', action.markdown).update('mobile', function (mobile) {
        return mobile.set('link', action.mobile.link).set('text', action.mobile.text);
      }).update('email', function (email) {
        return email.set('link', action.email.link).set('text', action.email.text);
      }).update('address', function (address) {
        return address.set('link', action.address.link).set('text', action.address.text);
      });
    default:
      return state;
  }
};