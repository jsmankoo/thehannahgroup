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

var Video = function Video(_ref) {
  var videos = _ref.videos;
  var poster = _ref.poster;

  return _react2.default.createElement(
    'video',
    {
      preload: true,
      loop: true,
      autoPlay: true,
      poster: poster,
      style: [_Styles2.default.videos]
    },
    videos.map(function (url, index) {
      return _react2.default.createElement('source', { src: url, key: index });
    })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _radium2.default)(Video);