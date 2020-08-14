import React from 'react';
import { Input } from 'antd';
import "../index.css";
export default (({
  config
}) => {
  const {
    options = {}
  } = config;
  const {
    value = {},
    placeholder = {}
  } = options.base || {};
  return /*#__PURE__*/React.createElement(Input, {
    className: "InputUnderline",
    value: value.value,
    placeholder: placeholder.value
  });
});