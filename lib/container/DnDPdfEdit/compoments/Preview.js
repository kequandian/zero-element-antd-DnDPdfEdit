"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageConfig;

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _request = require("zero-element/lib/utils/request");

function PageConfig(_ref) {
  var name = _ref.name,
      onGetData = _ref.onGetData,
      dispatch = _ref.dispatch;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  function handlePreview() {
    setLoading(true);
    (0, _request.preview)("/api/io/pdf/export/preview/".concat(name), {})["finally"](function (_) {
      return setLoading(false);
    });
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_button["default"], {
    icon: "eye",
    loading: loading,
    style: {
      marginRight: 4
    },
    onClick: handlePreview
  }, "\u9884\u89C8"));
}