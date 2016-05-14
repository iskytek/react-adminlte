'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jsMd = require('js-md5');

var _jsMd2 = _interopRequireDefault(_jsMd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var httpUrl = 'http://www.gravatar.com/avatar';
var httpsUrl = 'https://secure.gravatar.com/avatar';

var Gravatar = function (_React$Component) {
    _inherits(Gravatar, _React$Component);

    function Gravatar() {
        _classCallCheck(this, Gravatar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Gravatar).apply(this, arguments));
    }

    _createClass(Gravatar, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var defaultImage = _props.defaultImage;
            var email = _props.email;
            var rating = _props.rating;
            var secure = _props.secure;
            var size = _props.size;

            var otherProps = _objectWithoutProperties(_props, ['defaultImage', 'email', 'rating', 'secure', 'size']);

            var hash = (0, _jsMd2.default)(email);
            var gravatar = secure ? httpsUrl + '/' + hash : httpUrl + '/' + hash;

            var options = {
                size: size,
                'default': defaultImage,
                rating: rating
            };

            options = Object.keys(options).reduce(function (query, key) {
                var value = options[key];

                if (value) {
                    query.push(key + '=' + encodeURIComponent(value));
                }

                return query;
            }, []).join('&');

            if (options) {
                gravatar += '?' + options;
            }

            return _react2.default.createElement('img', _extends({ src: gravatar }, otherProps));
        }
    }]);

    return Gravatar;
}(_react2.default.Component);

Gravatar.propTypes = {
    defaultImage: _react2.default.PropTypes.string,
    email: _react2.default.PropTypes.string.isRequired,
    rating: _react2.default.PropTypes.oneOf(['g', 'pg', 'r', 'x']),
    secure: _react2.default.PropTypes.bool,
    size: function size(props, propName, componentName) {
        var value = props[propName];
        var base = 'Invalid prop ' + propName + ' supplied to `' + componentName + '`.';

        if (!Number.isInteger(value)) {
            return new Error(base + ' Must be integer.');
        } else if (value < 1 || value > 2048) {
            return new Error(base + ' Must be between 1 and 2048.');
        }
    }
};

Gravatar.defaultProps = {
    secure: false
};

exports.default = Gravatar;