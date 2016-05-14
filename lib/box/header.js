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

var BoxHeader = function (_React$Component) {
    _inherits(BoxHeader, _React$Component);

    function BoxHeader() {
        _classCallCheck(this, BoxHeader);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BoxHeader).apply(this, arguments));
    }

    _createClass(BoxHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var border = _props.border;
            var className = _props.className;
            var children = _props.children;
            var pull = _props.pull;
            var title = _props.title;

            var otherProps = _objectWithoutProperties(_props, ['border', 'className', 'children', 'pull', 'title']);

            className = (0, _classnames2.default)('box-header', className, { border: border });

            var boxToolsClassName = (0, _classnames2.default)('box-tools', {
                'pull-left': pull === 'left',
                'pull-right': pull === 'right'
            });

            return _react2.default.createElement(
                'div',
                _extends({ className: className }, otherProps),
                _react2.default.createElement(
                    'h3',
                    { className: 'box-title' },
                    title
                ),
                _react2.default.createElement(
                    'div',
                    { className: boxToolsClassName },
                    children
                )
            );
        }
    }]);

    return BoxHeader;
}(_react2.default.Component);

BoxHeader.propTypes = {
    border: _react2.default.PropTypes.bool,
    className: _react2.default.PropTypes.string,
    children: _utils.COMPONENT_CHILDREN,
    pull: _react2.default.PropTypes.oneOf(['left', 'right']),
    title: _react2.default.PropTypes.string
};

BoxHeader.defaultProps = {
    border: false
};

exports.default = BoxHeader;