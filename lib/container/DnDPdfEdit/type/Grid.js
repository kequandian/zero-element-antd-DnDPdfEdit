import React from 'react';
import { Row, Col } from 'antd';
import Render from "./Layout";
export default function Grid(props) {
  const {
    config,
    dispatch,
    state
  } = props;
  const {
    value,
    items
  } = config;
  return /*#__PURE__*/React.createElement(Row, null, [...Array(value.length)].map((_, i) => {
    const itemCfg = items[i] || {};
    const {
      layout
    } = itemCfg;
    return /*#__PURE__*/React.createElement(Col, {
      key: i,
      span: value[i]
    }, layout ? /*#__PURE__*/React.createElement(Grid, {
      config: itemCfg,
      dispatch: dispatch
    }) : /*#__PURE__*/React.createElement(Render, {
      index: i,
      itemCfg: itemCfg,
      config: config,
      dispatch: dispatch,
      state: state
    }));
  }));
}