"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formatToConfig;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function formatToConfig(cfg, formName) {
  var _cfg$items = cfg.items,
      items = _cfg$items === void 0 ? [] : _cfg$items;
  var filterFields = items.filter(function (field) {
    return field;
  });
  var config = {
    flows: [],
    page: {
      pageName: 'A4',
      margin: '40'
    }
  };
  filterFields.forEach(function (field) {
    config.flows.push(formatType(field));
  });
  return [config];
}

function formatType(options) {
  var type = options.type;
  var map = {
    Table: fTable,
    Grid: fGrid,
    Text: fText,
    Content: fContent
  };
  return (map[type] || fUndefined)(options);
}

function fUndefined() {
  return {};
}
/**
 * 返回数组内的比例
 * e.g.
 * [16, 8] => [2, 1]
 * @param {array} arr 
 * @returns {array}
 */


function computeScale(arr) {
  var min = Math.min.apply(Math, (0, _toConsumableArray2["default"])(arr));
  return arr.map(function (i) {
    return ~~(i / min);
  });
}

function fGrid(opt) {
  var _opt$value = opt.value,
      value = _opt$value === void 0 ? [] : _opt$value,
      _opt$items = opt.items,
      items = _opt$items === void 0 ? [] : _opt$items;
  var config = {
    name: 'linear',
    columnWidths: computeScale(value),
    elements: []
  };
  items.forEach(function (field) {
    config.elements.push(formatType(field));
  });
  return config;
}

function fTable(opt) {
  var options = opt.options;
  var field = options.field,
      _options$table = options.table,
      table = _options$table === void 0 ? [] : _options$table;
  var config = {
    name: 'table',
    columnWidths: [],
    columnsLayout: [],
    columnKeyBindings: [],
    rowHeight: 50,
    headerHeight: 40,
    data: '${' + field.value + '}'
  };
  table.forEach(function (f) {
    var label = f.label,
        value = f.value;
    config.columnKeyBindings.push({
      key: value,
      column: value
    });
  });
  config.columnWidths = new Array(config.columnKeyBindings.length).fill(1);
  return config;
}

function fText(opt) {
  var options = opt.options;
  var field = options.field,
      base = options.base,
      style = options.style;
  var config = {
    name: 'text',
    data: base.data.value,
    height: style.height.value
  };

  if (!base.data.value) {
    config.data = '${' + field.value + '}';
  }

  return config;
}

function fContent(opt) {
  var _config;

  var options = opt.options;
  var field = options.field,
      base = options.base,
      style = options.style;
  var columnWidths = base.columnWidths,
      title = base.title,
      data = base.data;
  var config = (_config = {
    name: 'content',
    data: base.data.value,
    columnWidths: columnWidths.value.split(','),
    title: title.value.split(',')
  }, (0, _defineProperty2["default"])(_config, "data", data.value.split(',')), (0, _defineProperty2["default"])(_config, "height", style.height.value), _config);

  if (!base.data.value) {
    config.data = '${' + field.value + '}';
  }

  return config;
}