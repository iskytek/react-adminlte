'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require('./modal');

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _body = require('./body');

Object.defineProperty(exports, 'ModalBody', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_body).default;
  }
});

var _footer = require('./footer');

Object.defineProperty(exports, 'ModalFooter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }