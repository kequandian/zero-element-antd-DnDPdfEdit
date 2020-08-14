import React, { useState, useRef } from 'react';
import { Modal, Button, Typography, Radio, InputNumber, Input } from 'antd';
const {
  Title
} = Typography;
export default function PageConfig({
  dispatch,
  page
}) {
  const [visible, setVisible] = useState(false);
  const pageValue = useRef({});

  function handleVisible() {
    setVisible(!visible);
  }

  function handleChange(key, e) {
    let value;

    if (typeof e === 'object') {
      value = e.target.value;
    } else {
      value = e;
    }

    pageValue.current = { ...pageValue.current,
      [key]: value
    };
  }

  function handleSave() {
    dispatch({
      type: 'save',
      payload: {
        page: { ...page,
          ...pageValue.current
        }
      }
    });
    handleVisible();
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleVisible,
    style: {
      marginRight: 4
    }
  }, "\u9875\u9762\u914D\u7F6E"), /*#__PURE__*/React.createElement(Modal, {
    destroyOnClose: true,
    visible: visible,
    onOk: handleSave,
    onCancel: handleVisible
  }, /*#__PURE__*/React.createElement(Title, {
    level: 4
  }, "\u5C3A\u5BF8"), /*#__PURE__*/React.createElement(Radio.Group, {
    defaultValue: page.pageName,
    onChange: handleChange.bind(null, 'pageName')
  }, /*#__PURE__*/React.createElement(Radio, {
    value: "A3"
  }, "A3"), /*#__PURE__*/React.createElement(Radio, {
    value: "A4"
  }, "A4"), /*#__PURE__*/React.createElement(Radio, {
    value: "A5"
  }, "A5")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Title, {
    level: 4
  }, "\u65B9\u5411"), /*#__PURE__*/React.createElement(Radio.Group, {
    defaultValue: page.rotate,
    onChange: handleChange.bind(null, 'rotate')
  }, /*#__PURE__*/React.createElement(Radio, {
    value: true
  }, "\u6A2A\u5411"), /*#__PURE__*/React.createElement(Radio, {
    value: false
  }, "\u7EB5\u5411")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Title, {
    level: 4
  }, "\u9875\u9762\u5185\u95F4\u8DDD"), /*#__PURE__*/React.createElement(InputNumber, {
    defaultValue: page.margin,
    onChange: handleChange.bind(null, 'margin')
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Title, {
    level: 4
  }, "\u9875\u9762\u80CC\u666F\u56FE URL"), /*#__PURE__*/React.createElement(Input, {
    defaultValue: page.backgroundImageUrl,
    onChange: handleChange.bind(null, 'backgroundImageUrl')
  })));
}