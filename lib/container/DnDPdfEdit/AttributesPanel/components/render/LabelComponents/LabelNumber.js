"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LabelNumber;

require("antd/lib/input-number/style/css");

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _react = _interopRequireDefault(require("react"));

function LabelNumber(_ref) {
  var field = _ref.field,
      label = _ref.label,
      value = _ref.value,
      handle = _ref.handle;

  function handleChange(number) {
    handle(field, {
      target: {
        value: number
      }
    });
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, label), _react["default"].createElement(_inputNumber["default"], {
    value: value,
    onChange: handleChange
  }));
}