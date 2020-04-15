"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _default = function _default(_ref) {
  var config = _ref.config;
  var _config$options = config.options,
      options = _config$options === void 0 ? {} : _config$options;
  var _options$base = options.base,
      base = _options$base === void 0 ? {} : _options$base,
      _options$style = options.style,
      style = _options$style === void 0 ? {} : _options$style;
  var _base$title = base.title,
      title = _base$title === void 0 ? {} : _base$title,
      _base$data = base.data,
      data = _base$data === void 0 ? {} : _base$data;
  var styleObj = (0, _react.useMemo)(function () {
    var rst = {};
    Object.keys(style).forEach(function (key) {
      return rst[key] = style[key].value;
    });
    return rst;
  }, [style]);
  var titleList = [];
  var dataList = [];

  if (title.value) {
    titleList = title.value.split(',');
  }

  if (data.value) {
    dataList = data.value.split(',');
  }

  return _react["default"].createElement("div", {
    style: styleObj
  }, titleList.map(function (item, i) {
    return _react["default"].createElement("div", {
      key: i
    }, item, ": ", dataList[i]);
  }));
};

exports["default"] = _default;