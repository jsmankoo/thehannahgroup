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

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Featured = function Featured(_ref) {
  var mls = _ref.mls;
  var properties = _ref.properties;

  return _react2.default.createElement(
    'div',
    { id: 'featured', className: 'Featured', style: [_Styles2.default.base] },
    _react2.default.createElement(
      'div',
      { style: [_Styles2.default.wrapper] },
      _react2.default.createElement(
        'h2',
        { style: [_Styles2.default.header] },
        'FEATURED PROPERTIES',
        _react2.default.createElement(
          'a',
          { href: mls, style: [_Styles2.default.mls] },
          'SEARCH THE MLS'
        )
      ),
      _react2.default.createElement(
        'div',
        {
          id: 'featuredProperties',
          className: 'owl-carousel' },
        properties.map(function (_ref2, index) {
          var photo = _ref2.photo;
          var address = _ref2.address;
          var link = _ref2.link;
          var price = _ref2.price;
          return _react2.default.createElement(
            'div',
            { className: 'item', key: link },
            _react2.default.createElement(
              'a',
              { href: link, key: link, style: {
                  display: 'block',
                  margin: 'auto',
                  padding: '0px 12.5px',
                  color: '#525252',
                  ':hover': {
                    opacity: 0.9
                  }
                } },
              _react2.default.createElement('img', { src: photo, style: {
                  display: 'block',
                  margin: 'auto',
                  width: '440px',
                  maxWidth: '100%'
                } }),
              _react2.default.createElement('div', {
                style: {
                  display: 'block',
                  margin: 'auto',
                  width: '440px',
                  maxWidth: '100%',
                  textAlign: 'center',
                  fontFamily: 'trajan-pro-3',
                  fontWeight: '600',
                  padding: '15px 0px',
                  '@media (min-width: 768px)': {
                    textAlign: 'left'
                  }
                },
                dangerouslySetInnerHTML: { __html: (0, _marked2.default)(address) }
              }),
              _react2.default.createElement(
                'div',
                { style: {
                    display: 'block',
                    margin: 'auto',
                    fontSize: '18px',
                    padding: '0px',
                    width: '440px',
                    maxWidth: '100%',
                    letterSpacing: '1px',
                    fontFamily: 'trajan-pro-3',
                    fontWeight: 600,
                    textAlign: 'center',
                    '@media (min-width: 768px)': {
                      textAlign: 'left'
                    }
                  } },
                price
              )
            )
          );
        })
      ),
      _react2.default.createElement(_radium.Style, {
        scopeSelector: '#featuredProperties',
        rules: {
          p: {
            padding: 0
          },
          '.owl-controls': {
            margin: '25px auto'
          }
        }
      })
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var Featured = _ref3.Featured;

  return {
    mls: Featured.get('mlsLink'),
    properties: Featured.get('properties').toJS()
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Featured));