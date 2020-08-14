function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from 'react';
import ImageView from 'zero-element-antd/lib/components/ImageView';
export default (props => {
  const {
    config
  } = props;
  const {
    options = {}
  } = config;
  const {
    base = {},
    style = {}
  } = options;
  const {
    value = {}
  } = base;
  const styleObj = useMemo(() => {
    const rst = {};
    Object.keys(style).forEach(key => rst[key] = style[key].value);
    return rst;
  }, [style]);
  return /*#__PURE__*/React.createElement("div", null, value.value ? /*#__PURE__*/React.createElement(ImageView, _extends({
    value: value.value
  }, styleObj)) : /*#__PURE__*/React.createElement("div", null, "\u6682\u65E0\u56FE\u7247"));
});