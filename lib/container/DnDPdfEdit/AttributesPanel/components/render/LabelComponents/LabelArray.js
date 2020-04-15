"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LabelArray;

require("antd/lib/auto-complete/style/css");

var _autoComplete = _interopRequireDefault(require("antd/lib/auto-complete"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

var _react = _interopRequireWildcard(require("react"));

var TextArea = _input["default"].TextArea;

function LabelArray(_ref) {
  var field = _ref.field,
      label = _ref.label,
      value = _ref.value,
      handle = _ref.handle;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      dataSource = _useState2[0],
      setDataSource = _useState2[1];

  function handleInput(v) {
    handle(field, {
      target: {
        value: v
      }
    });
    setDataSource(!v ? [] : formatToSuggest(v));
  }

  ;

  function handleChange(text) {
    handle(field, {
      target: {
        value: text
      }
    });
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, label), _react["default"].createElement(_autoComplete["default"], {
    dataSource: dataSource,
    style: {
      width: 180
    },
    onSelect: handleChange,
    onChange: handleInput,
    value: value
  }, _react["default"].createElement(TextArea, {
    placeholder: "\u8F93\u5165\u2026\u2026",
    style: {
      height: 50
    } // onKeyPress={handleChange}

  })));
}

function formatToSuggest(v) {
  var rst = [];

  if (v) {
    // 通过 , 分割字符串
    rst.push(v); // 分割除了 , 之外的全部字符串

    var t = Array.from(new String(v.split(',').join(''))).join(',');

    if (t !== v) {
      rst.push(t);
    }
  }

  return rst;
}