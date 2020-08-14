import React, { useEffect, useRef, useState } from 'react';
import Barcode from 'jsbarcode';
export default (props => {
  const {
    config
  } = props;
  const {
    options = {}
  } = config;
  const {
    value = {}
  } = options.base || {};
  const ref = useRef(null);
  const [tips, setTips] = useState('');
  useEffect(_ => {
    if (ref.current) {
      try {
        Barcode(ref.current, value.value, {
          displayValue: false,
          width: 1,
          height: 35,
          margin: 0
        });
        setTips('');
      } catch (error) {
        setTips(`无效的条码值: ${value.value}`);
      }
    }
  }, [value.value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, tips ? tips : null, /*#__PURE__*/React.createElement("div", {
    className: "barcode-box"
  }, /*#__PURE__*/React.createElement("svg", {
    ref: ref
  })));
});