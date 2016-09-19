'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _reactRedux = require('react-redux');

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact(_ref) {
  var name = _ref.name;
  var markdown = _ref.markdown;
  var mobile = _ref.mobile;
  var email = _ref.email;
  var address = _ref.address;

  return _react2.default.createElement(
    'div',
    { id: 'contact', className: 'Contact', style: [_Styles2.default.base] },
    _react2.default.createElement(
      'h2',
      { style: [_Styles2.default.header] },
      name
    ),
    _react2.default.createElement('div', { style: [_Styles2.default.markdown],
      dangerouslySetInnerHTML: { __html: (0, _marked2.default)(markdown) } }),
    _react2.default.createElement(
      'div',
      { style: [_Styles2.default.icons] },
      _react2.default.createElement(
        'a',
        { href: mobile.link, style: [_Styles2.default.icon], title: mobile.text, key: 'mobile' },
        _react2.default.createElement('i', { style: [_Styles2.default.icon.mobile], className: 'btr bt-mobile' }),
        _react2.default.createElement(
          'h5',
          { style: [_Styles2.default.text] },
          mobile.text
        )
      ),
      _react2.default.createElement(
        'a',
        { href: email.link, style: [_Styles2.default.icon], title: email.text, key: 'email' },
        _react2.default.createElement('i', { style: [_Styles2.default.icon.email], className: 'btr bt-paper-plane' }),
        _react2.default.createElement(
          'h5',
          { style: [_Styles2.default.text] },
          email.text
        )
      ),
      _react2.default.createElement(
        'a',
        { target: '_blank', href: address.link, style: [_Styles2.default.icon], title: address.text, key: 'address' },
        _react2.default.createElement('i', { style: [_Styles2.default.icon.address], className: 'btr bt-map' }),
        _react2.default.createElement('h5', { style: [_Styles2.default.text], dangerouslySetInnerHTML: { __html: address.text } })
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var Contact = _ref2.Contact;

  return {
    name: Contact.get('name'),
    markdown: Contact.get('markdown'),
    mobile: Contact.get('mobile').toJS(),
    email: Contact.get('email').toJS(),
    address: Contact.get('address').toJS()
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Contact));