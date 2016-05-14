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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FAIcon = function (_React$Component) {
    _inherits(FAIcon, _React$Component);

    function FAIcon() {
        _classCallCheck(this, FAIcon);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FAIcon).apply(this, arguments));
    }

    _createClass(FAIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var animation = _props.animation;
            var border = _props.border;
            var className = _props.className;
            var fixedWidth = _props.fixedWidth;
            var icon = _props.icon;
            var pull = _props.pull;
            var rotate = _props.rotate;
            var size = _props.size;

            var otherProps = _objectWithoutProperties(_props, ['animation', 'border', 'className', 'fixedWidth', 'icon', 'pull', 'rotate', 'size']);

            className = (0, _classnames2.default)(['fa', 'fa-' + icon], animation ? 'fa-' + animation : '', {
                'fa-border': border,
                'fa-fw': fixedWidth,
                'fa-pull-left': pull === 'left',
                'fa-pull-right': pull === 'right',
                'fa-rotate-90': rotate === '90',
                'fa-rotate-180': rotate === '180',
                'fa-rotate-270': rotate === '270',
                'fa-rotate-horizontal': rotate === 'horizontal',
                'fa-rotate-vertical': rotate === 'vertical',
                'fa-lg': size === 'lg',
                'fa-2x': size === '2x',
                'fa-3x': size === '3x',
                'fa-4x': size === '4x',
                'fa-5x': size === '5x'
            }, className);

            return _react2.default.createElement('i', _extends({ className: className }, otherProps));
        }
    }]);

    return FAIcon;
}(_react2.default.Component);

FAIcon.propTypes = {
    animation: _react2.default.PropTypes.oneOf(['pulse', 'spin']),
    border: _react2.default.PropTypes.bool,
    className: _react2.default.PropTypes.string,
    fixedWidth: _react2.default.PropTypes.bool,
    icon: _react2.default.PropTypes.string.isRequired,
    pull: _react2.default.PropTypes.oneOf(['left', 'right']),
    rotate: _react2.default.PropTypes.oneOf(['90', '180', '270', 'horizontal', 'vertical']),
    size: _react2.default.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x'])
};

FAIcon.defaultProps = {
    border: false,
    fixedWidth: false
};

exports.default = FAIcon;