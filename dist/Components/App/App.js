'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

//import Components


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactMotion = require('react-motion');

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _prismic = require('prismic.io');

var _prismic2 = _interopRequireDefault(_prismic);

var _Nav = require('../Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Jumbotron = require('../Jumbotron/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Featured = require('../Featured/Featured');

var _Featured2 = _interopRequireDefault(_Featured);

var _About = require('../About/About');

var _About2 = _interopRequireDefault(_About);

var _Contact = require('../Contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _Foot = require('../Foot/Foot');

var _Foot2 = _interopRequireDefault(_Foot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref) {
  var Menu = _ref.Menu;
  var App = _ref.App;

  return {
    menuOpen: Menu.get('open'),
    title: App.get('title'),
    description: App.get('description'),
    loaded: App.get('loaded'),
    delay: App.get('delay'),
    jumbotronLoaded: App.get('initJumbotron')
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggle: function toggle() {
      dispatch({ type: 'MENU_TOGGLE' });
    },
    appInit: function appInit() {
      dispatch({ type: 'APP_INIT' });
    },
    initJumbotron: function initJumbotron() {
      dispatch({ type: 'APP_JUMBOTRON_INIT' });
    },
    helmetInit: function helmetInit(title, description) {
      dispatch({
        type: 'APP_TITLE',
        title: title,
        description: description
      });
    },
    addProperty: function addProperty(photo, address, price, link) {
      dispatch({
        type: 'FEATURED_ADD_PROPERTY',
        photo: photo,
        address: address,
        price: price,
        link: link
      });
    },
    aboutInit: function aboutInit(background, name, tablet, mobile, markdown) {
      dispatch({
        type: 'ABOUT_INIT',
        background: background,
        name: name,
        tablet: tablet,
        mobile: mobile,
        markdown: markdown
      });
    },
    contactInit: function contactInit(name, markdown, mobile, email, address) {
      dispatch({
        type: 'CONTACT_INIT',
        name: name,
        markdown: markdown,
        mobile: mobile,
        email: email,
        address: address
      });
    },
    footInit: function footInit(copyright, information, facebook, twitter) {
      dispatch({
        type: 'FOOT_INIT',
        copyright: copyright,
        information: information,
        facebook: facebook,
        twitter: twitter
      });
    }
  };
};

var App = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (0, _radium2.default)(_class = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var delay = _props.delay;
      var appInit = _props.appInit;
      var initJumbotron = _props.initJumbotron;
      var addProperty = _props.addProperty;
      var aboutInit = _props.aboutInit;
      var contactInit = _props.contactInit;
      var footInit = _props.footInit;
      var helmetInit = _props.helmetInit;

      this.timeout = setTimeout(appInit, delay);
      setTimeout(initJumbotron, 1000);
      _prismic2.default.api('https://hannah.prismic.io/api').then(function (api) {
        return api.query(_prismic2.default.Predicates.at('my.index.uid', 'index'));
      }).then(function (_ref2) {
        var results = _ref2.results;

        console.log(results[0].data);
        // Init Properties
        results[0].data['index.Properties'].value.forEach(function (_ref3) {
          var Address = _ref3.Address;
          var Link = _ref3.Link;
          var Photo = _ref3.Photo;
          var Price = _ref3.Price;

          addProperty(Photo.value.main.url, Address.value, Price.value, Link.value.url);
        });
        helmetInit(results[0].data['index.PageTitle'].value, results[0].data['index.PageDescription'].value);
        aboutInit(results[0].data['index.BackgroundImage'].value.main.url, results[0].data['index.Name'].value, results[0].data['index.Profile Pic'].value.main.url, results[0].data['index.Mobile Pic'].value.main.url, results[0].data['index.Paragraph'].value);
        contactInit(results[0].data['index.botHeading'].value, results[0].data['index.botParagragh'].value, {
          link: results[0].data['index.MobileLink'].value.url,
          text: results[0].data['index.Mobile'].value
        }, {
          link: results[0].data['index.EmailLink'].value.url,
          text: results[0].data['index.Email'].value
        }, {
          link: results[0].data['index.AddressLink'].value.url,
          text: results[0].data['index.Address'].value
        });
        footInit(results[0].data['index.Copyright'].value, results[0].data['index.Information'].value, results[0].data['index.facebook'].value.url, results[0].data['index.Twitter'].value.url);
        $(".owl-carousel").owlCarousel({
          dots: true,
          autoPlay: true,
          items: 3,
          itemsCustom: [[0, 1], [768, 2], [1024, 3]]
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var title = _props2.title;
      var description = _props2.description;
      var menuOpen = _props2.menuOpen;
      var loaded = _props2.loaded;
      var toggle = _props2.toggle;
      var jumbotronLoaded = _props2.jumbotronLoaded;

      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          style: {
            opacity: loaded ? (0, _reactMotion.spring)(1, _reactMotion.presets.noWobble) : (0, _reactMotion.spring)(0, _reactMotion.presets.noWobble)
          } },
        function (_ref4) {
          var opacity = _ref4.opacity;
          return _react2.default.createElement(
            _radium.StyleRoot,
            { style: [{ opacity: opacity }] },
            _react2.default.createElement(_reactHelmet2.default, {
              title: title,
              meta: [{ name: 'description', content: description }]
            }),
            _react2.default.createElement(_Nav2.default, null),
            _react2.default.createElement(_Menu2.default, { LinkOveride: true }),
            _react2.default.createElement(_Jumbotron2.default, { load: jumbotronLoaded }),
            _react2.default.createElement(_Featured2.default, null),
            _react2.default.createElement(_About2.default, null),
            _react2.default.createElement(_Contact2.default, null),
            _react2.default.createElement(_Foot2.default, null)
          );
        }
      );
    }
  }]);

  return App;
}(_react.Component)) || _class) || _class);
;

exports.default = App;