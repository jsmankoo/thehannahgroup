'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideShow = (0, _radium2.default)(_class = function (_Component) {
  _inherits(SlideShow, _Component);

  function SlideShow(props) {
    _classCallCheck(this, SlideShow);

    var _this = _possibleConstructorReturn(this, (SlideShow.__proto__ || Object.getPrototypeOf(SlideShow)).call(this, props));

    _this.componentDidMount = function () {
      _this.slide = setInterval(function () {
        _this.setState({
          index: (_this.state.index + 1) % _this.props.slides.length
        });
      }, 5000);
    };

    _this.componentWillUnmount = function () {
      clearInterval(_this.slide);
    };

    _this.state = {
      index: 0
    };
    return _this;
  }

  _createClass(SlideShow, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var slides = this.props.slides;

      return _react2.default.createElement(
        'div',
        { className: 'SlideShow', style: [_Styles2.default.videos] },
        slides.map(function (slide, index) {
          return _react2.default.createElement(
            _reactMotion.Motion,
            { key: index, style: {
                opacity: _this2.state.index === index ? (0, _reactMotion.spring)(1, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(0, _reactMotion.presets.noWobble)
              } },
            function (_ref) {
              var opacity = _ref.opacity;
              return _react2.default.createElement('div', { style: [{
                  opacity: opacity,
                  position: 'absolute',
                  backgroundImage: 'url(\'' + slide + '\')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100vh',
                  '@media (max-width: 1024px) and (min-width: 768px)': {
                    height: '768px'
                  }
                }] });
            }
          );
        })
      );
    }
  }]);

  return SlideShow;
}(_react.Component)) || _class;

exports.default = SlideShow;