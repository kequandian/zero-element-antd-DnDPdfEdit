import React, { useContext } from 'react';
import classNames from 'classnames';
import { Menu } from 'antd';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import Render from "../../utils/Render";
import DnDContext from "../../utils/context";
import "../../index.css";
export default (({
  index,
  data,
  onRemove,
  onEdit,
  onCopy,
  state,
  dispatch
}) => {
  const {
    current = {}
  } = useContext(DnDContext);
  const className = classNames({
    'ZEleA-DnDFormEdit-row': true,
    'ZEleA-DnDFormEdit-current': current.id === data.id
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContextMenuTrigger, {
    id: `element_${data.id}`
  }, /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: onEdit.bind(null, index)
  }, /*#__PURE__*/React.createElement(Render, {
    config: data,
    state: state,
    dispatch: dispatch
  }))), /*#__PURE__*/React.createElement(ContextMenu, {
    id: `element_${data.id}`,
    className: "ZEleA-DnDFormEdit-rightClickMenu"
  }, /*#__PURE__*/React.createElement(MenuItem, null, /*#__PURE__*/React.createElement(Menu, {
    selectedKeys: []
  }, /*#__PURE__*/React.createElement(Menu.Item, {
    onClick: onCopy.bind(null, index)
  }, /*#__PURE__*/React.createElement(CopyOutlined, {
    className: "ZEleA-DnDFormEdit-primary"
  }), "\u590D\u5236\u5143\u7D20"), /*#__PURE__*/React.createElement(Menu.Item, {
    onClick: onRemove.bind(null, index)
  }, /*#__PURE__*/React.createElement(DeleteOutlined, {
    className: "ZEleA-DnDFormEdit-danger"
  }), "\u79FB\u9664\u5143\u7D20")))));
});