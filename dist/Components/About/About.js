'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRedux = require('react-redux');

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(_ref) {
  var background = _ref.background;
  var name = _ref.name;
  var pic = _ref.pic;
  var markdown = _ref.markdown;

  return _react2.default.createElement(
    'div',
    { id: 'about', className: 'About', style: [_Styles2.default.base, {
        backgroundImage: 'url(\'' + background + '\')'
      }] },
    _react2.default.createElement(
      'div',
      { style: [_Styles2.default.tint] },
      _react2.default.createElement(
        'h2',
        { style: [_Styles2.default.header] },
        name
      ),
      _react2.default.createElement(
        'div',
        { style: [_Styles2.default.row] },
        _react2.default.createElement('img', { style: [_Styles2.default.img.mobile], src: pic.mobile }),
        _react2.default.createElement('img', { style: [_Styles2.default.img.tablet], src: pic.tablet }),
        _react2.default.createElement('div', { style: [_Styles2.default.markdown],
          dangerouslySetInnerHTML: { __html: (0, _marked2.default)(markdown) } })
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var About = _ref2.About;

  return {
    background: About.get('background'),
    name: About.get('name'),
    pic: About.get('pic').toJS(),
    markdown: About.get('markdown')
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(About));