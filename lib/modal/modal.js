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

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).apply(this, arguments));
    }

    _createClass(Modal, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var level = _props.level;
            var open = _props.open;
            var onClose = _props.onClose;
            var size = _props.size;
            var title = _props.title;

            var otherProps = _objectWithoutProperties(_props, ['children', 'className', 'level', 'open', 'onClose', 'size', 'title']);

            className = (0, _classnames2.default)('modal', (0, _utils.getComponentLevelClassName)('modal', level), className);

            var dialogClassName = (0, _classnames2.default)('modal-dialog', {
                'modal-sm': size === 'small',
                'modal-lg': size === 'large'
            });

            var styles = {};

            if (open) {
                styles.display = 'block';
            }

            return _react2.default.createElement(
                'div',
                _extends({
                    className: className,
                    style: styles,
                    role: 'dialog'
                }, otherProps),
                _react2.default.createElement(
                    'div',
                    { className: dialogClassName, role: 'document' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-header' },
                            _react2.default.createElement(
                                'button',
                                {
                                    type: 'button',
                                    className: 'close',
                                    'data-dismiss': 'modal',
                                    'aria-label': 'Close',
                                    onClick: onClose },
                                _react2.default.createElement(
                                    'span',
                                    { 'aria-hidden': 'true' },
                                    '×'
                                )
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'modal-title' },
                                title
                            )
                        ),
                        children
                    )
                )
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

Modal.propTypes = {
    children: _utils.COMPONENT_CHILDREN,
    className: _react2.default.PropTypes.string,
    level: _react2.default.PropTypes.oneOf(_utils.COMPONENT_LEVELS),
    onClose: _react2.default.PropTypes.func,
    open: _react2.default.PropTypes.bool,
    size: _react2.default.PropTypes.oneOf(['small', 'large']),
    title: _react2.default.PropTypes.string
};

Modal.defaultProps = {
    open: false
};

exports.default = Modal;