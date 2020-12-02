import React, { useState, useRef } from 'react';
import { Button, Typography, Modal, Row, Col, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const {
  Paragraph,
  Text
} = Typography;
export default function MapModal({
  value,
  onChange
}) {
  const [visible, setVisible] = useState(false);
  const keyRef = useRef();
  const valueRef = useRef();

  function handleOpen() {
    keyRef.current = '';
    valueRef.current = '';
    setVisible(true);
  }

  function handleAppend() {
    value[keyRef.current] = valueRef.current;
    onChange({ ...value
    });
    setVisible(false);
  }

  function handleRemove(key) {
    delete value[key];
    onChange({ ...value
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleOpen
  }, "\u65B0\u589E\u6620\u5C04"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), Object.keys(value).map(key => {
    return /*#__PURE__*/React.createElement(Paragraph, {
      key: key
    }, /*#__PURE__*/React.createElement(Text, {
      keyboard: true
    }, key), "=>", /*#__PURE__*/React.createElement(Text, {
      keyboard: true
    }, value[key]), /*#__PURE__*/React.createElement(DeleteOutlined, {
      className: "ZEleA-DnDFormEdit-ItemEdit-icon-delete",
      onClick: handleRemove.bind(null, key)
    }));
  }), /*#__PURE__*/React.createElement(Modal, {
    destroyOnClose: true,
    visible: visible,
    onOk: handleAppend,
    onCancel: _ => setVisible(false)
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u5C06\u5B57\u6BB5",
    onChange: e => keyRef.current = e.target.value
  })), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u6620\u5C04\u4E3A",
    onChange: e => valueRef.current = e.target.value
  })))));
}