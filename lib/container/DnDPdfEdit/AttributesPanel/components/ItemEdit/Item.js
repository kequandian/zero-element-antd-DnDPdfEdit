import React from 'react';
import { Card, Input, Select, InputNumber } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, EyeOutlined, EyeInvisibleOutlined, DeleteOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import Options from "./Options";
import "./index.css";
const {
  Option
} = Select;
export default function ItemEdit(props) {
  const {
    label,
    index,
    options,
    valueField = 'value',
    disabled,
    // 禁用 options 的编辑,
    text: {
      label: tLabel = '文本',
      value: tValue = '值'
    },
    editId,
    optionsField = [],
    onClick,
    onChange,
    onRemove,
    onOptionsChange,
    onVisible,
    onIndexChange
  } = props;
  const edit = editId === index;

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
        value
      }
    });
  }

  function handleWidthChange(value) {
    onChange(index, 'columnWidth', {
      target: {
        value
      }
    });
  }

  return /*#__PURE__*/React.createElement(Card, {
    size: "small",
    className: edit ? 'ZEleA-DnDFormEdit-ItemEdit-editing' : undefined,
    title: /*#__PURE__*/React.createElement("div", {
      className: "ZEleA-DnDFormEdit-ItemEdit-title",
      onClick: handleClick
    }, label),
    extra: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ArrowUpOutlined, {
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit",
      onClick: handleMoveUp
    }), /*#__PURE__*/React.createElement(ArrowDownOutlined, {
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit",
      onClick: handleMoveDown
    }), onVisible ? options.visible ? /*#__PURE__*/React.createElement(EyeOutlined, {
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-delete",
      onClick: onVisible.bind(null, index)
    }) : /*#__PURE__*/React.createElement(EyeInvisibleOutlined, {
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-delete",
      onClick: onVisible.bind(null, index)
    }) : null, onRemove ? /*#__PURE__*/React.createElement(DeleteOutlined, {
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-delete",
      onClick: onRemove.bind(null, index)
    }) : null, edit ? /*#__PURE__*/React.createElement(UpOutlined, {
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit",
      onClick: handleClick
    }) : /*#__PURE__*/React.createElement(DownOutlined, {
      className: "ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit",
      onClick: handleClick
    })),
    bodyStyle: {
      display: edit ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", null, tLabel, ": "), /*#__PURE__*/React.createElement(Input, {
    value: label,
    onChange: onChange.bind(null, index, 'label')
  }), /*#__PURE__*/React.createElement("span", null, tValue, ": "), /*#__PURE__*/React.createElement(Input, {
    value: props[valueField],
    readOnly: true
  }), /*#__PURE__*/React.createElement("span", null, "\u5217\u5BBD: "), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InputNumber, {
    value: props.columnWidth,
    onChange: handleWidthChange,
    min: 1
  })), /*#__PURE__*/React.createElement(Options, {
    index: index,
    data: options,
    disabled: disabled,
    onChange: onOptionsChange
  }));
}