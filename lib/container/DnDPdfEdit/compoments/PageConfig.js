"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PageConfig;

require("antd/lib/modal/style/css");

var _modal = _interopRequireDefault(require("antd/lib/modal"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/input-number/style/css");

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

require("antd/lib/radio/style/css");

var _radio = _interopRequireDefault(require("antd/lib/radio"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/lib/typography/style/css");

var _typography = _interopRequireDefault(require("antd/lib/typography"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Title = _typography["default"].Title;

function PageConfig(_ref) {
  var dispatch = _ref.dispatch,
      page = _ref.page;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var pageValue = (0, _react.useRef)({});

  function handleVisible() {
    setVisible(!visible);
  }

  function handleChange(key, e) {
    var value;

    if ((0, _typeof2["default"])(e) === 'object') {
      value = e.target.value;
    } else {
      value = e;
    }

    pageValue.current = _objectSpread({}, pageValue.current, (0, _defineProperty2["default"])({}, key, value));
  }

  function handleSave() {
    dispatch({
      type: 'save',
      payload: {
        page: _objectSpread({}, page, {}, pageValue.current)
      }
    });
    handleVisible();
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_button["default"], {
    onClick: handleVisible,
    style: {
      marginRight: 4
    }
  }, "\u9875\u9762\u914D\u7F6E"), _react["default"].createElement(_modal["default"], {
    destroyOnClose: true,
    visible: visible,
    onOk: handleSave,
    onCancel: handleVisible
  }, _react["default"].createElement(Title, {
    level: 4
  }, "\u5C3A\u5BF8"), _react["default"].createElement(_radio["default"].Group, {
    defaultValue: page.pageName,
    onChange: handleChange.bind(null, 'pageName')
  }, _react["default"].createElement(_radio["default"], {
    value: "A3"
  }, "A3"), _react["default"].createElement(_radio["default"], {
    value: "A4"
  }, "A4"), _react["default"].createElement(_radio["default"], {
    value: "A5"
  }, "A5")), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(Title, {
    level: 4
  }, "\u65B9\u5411"), _react["default"].createElement(_radio["default"].Group, {
    defaultValue: page.rotate,
    onChange: handleChange.bind(null, 'rotate')
  }, _react["default"].createElement(_radio["default"], {
    value: true
  }, "\u6A2A\u5411"), _react["default"].createElement(_radio["default"], {
    value: false
  }, "\u7EB5\u5411")), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(Title, {
    level: 4
  }, "\u9875\u9762\u5185\u95F4\u8DDD"), _react["default"].createElement(_inputNumber["default"], {
    defaultValue: page.margin,
    onChange: handleChange.bind(null, 'margin')
  }), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(Title, {
    level: 4
  }, "\u9875\u9762\u80CC\u666F\u56FE URL"), _react["default"].createElement(_input["default"], {
    defaultValue: page.backgroundImageUrl,
    onChange: handleChange.bind(null, 'backgroundImageUrl')
  })));
}