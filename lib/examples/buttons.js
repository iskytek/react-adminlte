'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMergeStyles = require('react-merge-styles');

var _reactMergeStyles2 = _interopRequireDefault(_reactMergeStyles);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Examples = function (_React$Component) {
    _inherits(Examples, _React$Component);

    function Examples() {
        _classCallCheck(this, Examples);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Examples).apply(this, arguments));
    }

    _createClass(Examples, [{
        key: 'getStyles',
        value: function getStyles() {
            return {
                display: 'flex',
                justifyContent: 'center'
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.getStyles() },
                _react2.default.createElement(ButtonsExample, null)
            );
        }
    }]);

    return Examples;
}(_react2.default.Component);

var ExamplePane = function (_React$Component2) {
    _inherits(ExamplePane, _React$Component2);

    function ExamplePane() {
        _classCallCheck(this, ExamplePane);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ExamplePane).apply(this, arguments));
    }

    _createClass(ExamplePane, [{
        key: 'getStyles',
        value: function getStyles() {
            return {
                fieldset: {
                    backgroundColor: '#CCC',
                    border: '3px dashed #444',
                    borderRadius: '8px',
                    display: 'inline-block',
                    margin: '8px',
                    padding: '16px'
                },
                legend: {
                    border: 'none',
                    fontWeight: 'bold',
                    margin: 0,
                    padding: '4px',
                    width: 'auto'
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var style = _props.style;
            var title = _props.title;

            var otherProps = _objectWithoutProperties(_props, ['children', 'style', 'title']);

            var styles = this.getStyles();

            return _react2.default.createElement(
                'fieldset',
                _extends({
                    style: (0, _reactMergeStyles2.default)(styles.fieldset, style)
                }, otherProps),
                _react2.default.createElement(
                    'legend',
                    { style: styles.legend },
                    title
                ),
                children
            );
        }
    }]);

    return ExamplePane;
}(_react2.default.Component);

ExamplePane.propTypes = {
    children: _react2.default.PropTypes.node,
    style: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
    title: _react2.default.PropTypes.string.isRequired
};

var ButtonsExample = function (_React$Component3) {
    _inherits(ButtonsExample, _React$Component3);

    function ButtonsExample() {
        _classCallCheck(this, ButtonsExample);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonsExample).apply(this, arguments));
    }

    _createClass(ButtonsExample, [{
        key: 'getStyles',
        value: function getStyles() {
            return {
                button: {
                    margin: '4px'
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = this.getStyles();

            return _react2.default.createElement(
                ExamplePane,
                { title: 'Buttons' },
                _react2.default.createElement(
                    _button2.default,
                    { style: styles.button },
                    'Click me!'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { level: 'default', style: styles.button },
                    'Default'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { level: 'primary', style: styles.button },
                    'Primary'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { level: 'success', style: styles.button },
                    'Success'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { level: 'info', style: styles.button },
                    'Info'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { level: 'warning', style: styles.button },
                    'Warning'
                ),
                _react2.default.createElement(
                    _button2.default,
                    { level: 'danger', style: styles.button },
                    'Danger'
                )
            );
        }
    }]);

    return ButtonsExample;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Examples, null), document.getElementById('example'));