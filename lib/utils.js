'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.COMPONENT_LEVELS = exports.COMPONENT_CHILDREN = undefined;
exports.getComponentLevelClassName = getComponentLevelClassName;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_CHILDREN = exports.COMPONENT_CHILDREN = _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.node]);

var COMPONENT_LEVELS = exports.COMPONENT_LEVELS = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

function getComponentLevelClassName(prefix, level) {
    if (COMPONENT_LEVELS.indexOf(level) === -1) {
        return '';
    }

    return prefix + '-' + level;
}