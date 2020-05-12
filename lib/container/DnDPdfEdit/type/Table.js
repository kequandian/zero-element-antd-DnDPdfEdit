"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = STable;

require("antd/lib/table/style/css");

var _table = _interopRequireDefault(require("antd/lib/table"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _lifeCycle = require("zero-element/lib/utils/hooks/lifeCycle");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function STable(props) {
  var config = props.config,
      state = props.state,
      dispatch = props.dispatch;
  var _config$options = config.options,
      options = _config$options === void 0 ? {} : _config$options;
  var _options$base = options.base,
      base = _options$base === void 0 ? {} : _options$base,
      _options$table = options.table,
      table = _options$table === void 0 ? [] : _options$table;
  var headerField = state.headerField;
  (0, _lifeCycle.useWillMount)(initData);

  function initData() {
    if (Array.isArray(headerField)) {
      table.splice.apply(table, [0, table.length].concat((0, _toConsumableArray2["default"])(headerField.map(function (key) {
        return {
          label: key,
          value: key,
          columnWidth: 1,
          options: {
            type: 'plain',
            visible: true
          }
        };
      }))));
      onSave();
    }
  }

  function onSave() {
    dispatch({
      type: 'editElement',
      payload: _objectSpread({}, config)
    });
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_table["default"], {
    dataSource: [],
    columns: table.filter(function (i) {
      return i.options.visible;
    }).map(function (item) {
      return {
        title: item.label,
        dataIndex: item.value,
        key: item.value
      };
    })
  }));
}