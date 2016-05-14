'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _box = require('./box');

Object.defineProperty(exports, 'Box', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_box).default;
  }
});

var _body = require('./body');

Object.defineProperty(exports, 'BoxBody', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_body).default;
  }
});

var _header = require('./header');

Object.defineProperty(exports, 'BoxHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_header).default;
  }
});

var _footer = require('./footer');

Object.defineProperty(exports, 'BoxFooter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }