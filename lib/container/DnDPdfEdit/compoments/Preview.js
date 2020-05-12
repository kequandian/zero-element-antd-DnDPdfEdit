"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageConfig;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

var _request = require("zero-element/lib/utils/request");

function PageConfig(_ref) {
  var name = _ref.name,
      onGetData = _ref.onGetData,
      dispatch = _ref.dispatch;

  function handlePreview() {
    (0, _request.preview)("/api/io/pdf/export/preview/".concat(name), {});
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_button["default"], {
    icon: "eye",
    style: {
      marginRight: 4
    },
    onClick: handlePreview
  }, "\u9884\u89C8"));
}