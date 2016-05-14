'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactMergeStyles = require('react-merge-styles');

var _reactMergeStyles2 = _interopRequireDefault(_reactMergeStyles);

var _faIcon = require('./faIcon');

var _faIcon2 = _interopRequireDefault(_faIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_React$Component) {
    _inherits(Overlay, _React$Component);

    function Overlay() {
        _classCallCheck(this, Overlay);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).apply(this, arguments));
    }

    _createClass(Overlay, [{
        key: 'getStyles',
        value: function getStyles() {
            return {
                overlay: {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var style = _props.style;
            var visible = _props.visible;

            var otherProps = _objectWithoutProperties(_props, ['className', 'style', 'visible']);

            className = (0, _classnames2.default)('overlay', className);

            var styles = this.getStyles();
            styles.overlay.display = visible ? 'block' : 'none';

            return _react2.default.createElement(
                'div',
                _extends({
                    className: className,
                    style: (0, _reactMergeStyles2.default)(styles.overlay, style)
                }, otherProps),
                _react2.default.createElement(_faIcon2.default, { icon: 'spinner', animation: 'pulse' })
            );
        }
    }]);

    return Overlay;
}(_react2.default.Component);

Overlay.propTypes = {
    className: _react2.default.PropTypes.string,
    style: _react2.default.PropTypes.object,
    visible: _react2.default.PropTypes.bool
};

Overlay.defaultProps = {
    visible: false
};

exports.default = Overlay;