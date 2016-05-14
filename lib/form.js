'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

        _this.state = {
            formData: {}
        };
        return _this;
    }

    _createClass(Form, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.state = { formData: this.getFormData() };
        }
    }, {
        key: 'getFormData',
        value: function getFormData() {
            var domNode = _reactDom2.default.findDOMNode(this);

            var formControls = Array.prototype.slice.call(domNode.querySelectorAll('[name]'));

            return formControls.reduce(function (state, child) {
                var name = child.getAttribute('name');

                state[name] = child.value;

                return state;
            }, {});
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(event) {
            event.preventDefault();

            var onSubmit = this.props.onSubmit;


            if (onSubmit) {
                onSubmit(this.state.formData);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange() {
            this.setState({ formData: this.getFormData() });
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint no-unused-vars: 0 */
            var _props = this.props;
            var children = _props.children;
            var onSubmit = _props.onSubmit;

            var otherProps = _objectWithoutProperties(_props, ['children', 'onSubmit']);

            return _react2.default.createElement(
                'form',
                _extends({
                    onChange: this.onChange.bind(this),
                    onSubmit: this.onSubmit.bind(this)
                }, otherProps),
                children
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

Form.propTypes = {
    children: _utils.COMPONENT_CHILDREN,
    onSubmit: _react2.default.PropTypes.func
};

exports.default = Form;