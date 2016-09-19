'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRedux = require('react-redux');

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Foot = function Foot(_ref) {
  var copyright = _ref.copyright;
  var information = _ref.information;
  var facebook = _ref.facebook;
  var twitter = _ref.twitter;

  console.log(twitter);
  console.log(facebook);
  return _react2.default.createElement(
    'div',
    { className: 'Foot', style: [_Styles2.default.base] },
    _react2.default.createElement(
      'div',
      { className: 'Copyright', style: [_Styles2.default.copyright] },
      copyright,
      _react2.default.createElement('br', null),
      information
    ),
    _react2.default.createElement(
      'div',
      { className: 'SocialMedia', style: [_Styles2.default.socialMedia] },
      _react2.default.createElement(
        'a',
        { href: facebook, target: '_blank', style: [_Styles2.default.socialMedia.a] },
        _react2.default.createElement('i', { className: 'fa fa-facebook-f' })
      ),
      _react2.default.createElement(
        'a',
        { href: twitter, target: '_blank', style: [_Styles2.default.socialMedia.a] },
        _react2.default.createElement('i', { className: 'fa fa-twitter' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'Developer', style: [_Styles2.default.developer] },
      'Website by ',
      _react2.default.createElement(
        'a',
        { href: 'http://www.purelisting.com', target: '_blank' },
        'PURELISTING'
      ),
      '.'
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var Foot = _ref2.Foot;

  return {
    copyright: Foot.get('copyright'),
    information: Foot.get('information'),
    facebook: Foot.get('facebook'),
    twitter: Foot.get('twitter'),
    instagram: Foot.get('instagram')
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Foot));