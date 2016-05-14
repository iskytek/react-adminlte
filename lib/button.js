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

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var block = _props.block;
            var children = _props.children;
            var className = _props.className;
            var flat = _props.flat;
            var href = _props.href;
            var level = _props.level;
            var size = _props.size;

            var otherProps = _objectWithoutProperties(_props, ['block', 'children', 'className', 'flat', 'href', 'level', 'size']);

            className = (0, _classnames2.default)('btn', (0, _utils.getComponentLevelClassName)('btn', level), {
                'btn-block': block,
                'btn-flat': flat,
                'btn-xs': size === 'extra-small',
                'btn-sm': size === 'small',
                'btn-lg': size === 'large'
            }, className);

            if (href) {
                return this.renderAsAnchor(children, className, href, otherProps);
            } else {
                return this.renderAsButton(children, className, otherProps);
            }
        }
    }, {
        key: 'renderAsButton',
        value: function renderAsButton(children, className, otherProps) {
            return _react2.default.createElement(
                'button',
                _extends({ className: className }, otherProps),
                children
            );
        }
    }, {
        key: 'renderAsAnchor',
        value: function renderAsAnchor(children, className, href, otherProps) {
            return _react2.default.createElement(
                'a',
                _extends({ className: className, href: href }, otherProps),
                children
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

Button.propTypes = {
    block: _react2.default.PropTypes.bool,
    children: _utils.COMPONENT_CHILDREN,
    className: _react2.default.PropTypes.string,
    flat: _react2.default.PropTypes.bool,
    href: _react2.default.PropTypes.string,
    level: _react2.default.PropTypes.oneOf(_utils.COMPONENT_LEVELS),
    size: _react2.default.PropTypes.oneOf(['extra-small', 'small', 'large'])
};

Button.defaultProps = {
    block: false,
    flat: false
};

exports.default = Button;