import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
const {
  TextArea
} = Input;
export default function LabelArray({
  field,
  label,
  value,
  handle
}) {
  const [dataSource, setDataSource] = useState([]);

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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, label), /*#__PURE__*/React.createElement(AutoComplete, {
    dataSource: dataSource,
    style: {
      width: 180
    },
    onSelect: handleChange,
    onChange: handleInput,
    value: value
  }, /*#__PURE__*/React.createElement(TextArea, {
    placeholder: "\u8F93\u5165\u2026\u2026",
    style: {
      height: 50
    } // onKeyPress={handleChange}

  })));
}

function formatToSuggest(v) {
  const rst = [];

  if (v) {
    // 通过 , 分割字符串
    rst.push(v); // 分割除了 , 之外的全部字符串

    const t = Array.from(new String(v.split(',').join(''))).join(',');

    if (t !== v) {
      rst.push(t);
    }
  }

  return rst;
}