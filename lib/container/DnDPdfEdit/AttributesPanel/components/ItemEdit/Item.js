"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ItemEdit;

require("antd/lib/card/style/css");

var _card = _interopRequireDefault(require("antd/lib/card"));

require("antd/lib/input-number/style/css");

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

require("antd/lib/input/style/css");

var _input = _interopRequireDefault(require("antd/lib/input"));

require("antd/lib/icon/style/css");

var _icon = _interopRequireDefault(require("antd/lib/icon"));

require("antd/lib/select/style/css");

var _select = _interopRequireDefault(require("antd/lib/select"));

var _react = _interopRequireDefault(require("react"));

var _Options = _interopRequireDefault(require("./Options"));

require("./index.css");

var Option = _select["default"].Option;

function ItemEdit(props) {
  var label = props.label,
      index = props.index,
      options = props.options,
      _props$valueField = props.valueField,
      valueField = _props$valueField === void 0 ? 'value' : _props$valueField,
      disabled = props.disabled,
      _props$text = props.text,
      _props$text$label = _props$text.label,
      tLabel = _props$text$label === void 0 ? '文本' : _props$text$label,
      _props$text$value = _props$text.value,
      tValue = _props$text$value === void 0 ? '值' : _props$text$value,
      editId = props.editId,
      _props$optionsField = props.optionsField,
      optionsField = _props$optionsField === void 0 ? [] : _props$optionsField,
      onClick = props.onClick,
      onChange = props.onChange,
      onRemove = props.onRemove,
      onOptionsChange = props.onOptionsChange,
      onVisible = props.onVisible,
      onIndexChange = props.onIndexChange;
  var edit = editId === index;

  function handleClick() {
    onClick(index);
  }

  function handleMoveUp() {
    onIndexChange('up', index);
  }

  function handleMoveDown() {
    onIndexChange('down', index);
  }

  function handleChange(value) {
    onChange(index, valueField, {
      target: {
        value: value
      }
    });
  }

  function handleWidthChange(value) {
    onChange(index, 'columnWidth', {
      target: {
        value: value
      }
    });
  }

  return _react["default"].createElement(_card["default"], {
    size: "small",
    className: edit ? 'ZEleA-DnDFormEdit-ItemEdit-editing' : undefined,
    title: _react["default"].createElement("div", {
      className: "ZEleA-DnDFormEdit-ItemEdit-title",
      onClick: handleClick
    }, label),
    extra: _react["default"].createElement("div", null, _react["default"].createElement(_icon["default"], {
      type: "arrow-up",
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit",
      onClick: handleMoveUp
    }), _react["default"].createElement(_icon["default"], {
      type: "arrow-down",
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit",
      onClick: handleMoveDown
    }), onVisible ? _react["default"].createElement(_icon["default"], {
      type: options.visible ? 'eye' : 'eye-invisible',
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-delete",
      onClick: onVisible.bind(null, index)
    }) : null, onRemove ? _react["default"].createElement(_icon["default"], {
      type: "delete",
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-delete",
      onClick: onRemove.bind(null, index)
    }) : null, _react["default"].createElement(_icon["default"], {
      type: edit ? 'up' : 'down',
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit",
      onClick: handleClick
    })),
    bodyStyle: {
      display: edit ? 'block' : 'none'
    }
  }, _react["default"].createElement("span", null, tLabel, ": "), _react["default"].createElement(_input["default"], {
    value: label,
    onChange: onChange.bind(null, index, 'label')
  }), _react["default"].createElement("span", null, tValue, ": "), _react["default"].createElement(_input["default"], {
    value: props[valueField],
    readOnly: true
  }), _react["default"].createElement("span", null, "\u5217\u5BBD: "), _react["default"].createElement("div", null, _react["default"].createElement(_inputNumber["default"], {
    value: props.columnWidth,
    onChange: handleWidthChange,
    min: 1
  })), _react["default"].createElement(_Options["default"], {
    index: index,
    data: options,
    disabled: disabled,
    onChange: onOptionsChange
  }));
}