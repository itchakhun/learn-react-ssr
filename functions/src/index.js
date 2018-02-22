'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _fact = require('./fact');

var _fact2 = _interopRequireDefault(_fact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _fact2.default)().then(function (facts) {
  (0, _reactDom.render)(_react2.default.createElement(_App2.default, { facts: facts }), document.querySelector('#root'));
});