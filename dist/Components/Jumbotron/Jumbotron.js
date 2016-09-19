'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRedux = require('react-redux');

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

var _Headline = require('./Headline');

var _Headline2 = _interopRequireDefault(_Headline);

var _SlideShow = require('./SlideShow');

var _SlideShow2 = _interopRequireDefault(_SlideShow);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jumbotron = function Jumbotron(_ref) {
  var videos = _ref.videos;
  var poster = _ref.poster;
  var slides = _ref.slides;
  var headline = _ref.headline;
  var subheadline = _ref.subheadline;
  var load = _ref.load;

  return _react2.default.createElement(
    'div',
    { className: 'Jumbotron', style: [_Styles.base] },
    _react2.default.createElement(
      'div',
      { style: [_Styles2.default.tint] },
      _react2.default.createElement(_SlideShow2.default, { slides: slides }),
      _react2.default.createElement(_Headline2.default, { headline: headline, subheadline: subheadline, load: load })
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var Jumbotron = _ref2.Jumbotron;

  return {
    videos: Jumbotron.get('videos').toJS(),
    poster: Jumbotron.get('poster'),
    slides: Jumbotron.get('slides').toJS(),
    headline: Jumbotron.get('headline'),
    subheadline: Jumbotron.get('subheadline')
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Jumbotron));