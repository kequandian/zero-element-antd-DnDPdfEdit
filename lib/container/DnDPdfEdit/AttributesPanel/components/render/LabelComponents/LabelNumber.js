import React from 'react';
import { InputNumber } from 'antd';
export default function LabelNumber({
  field,
  label,
  value,
  handle
}) {
  function handleChange(number) {
    handle(field, {
      target: {
        value: number
      }
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, label), /*#__PURE__*/React.createElement(InputNumber, {
    value: value,
    onChange: handleChange
  }));
}