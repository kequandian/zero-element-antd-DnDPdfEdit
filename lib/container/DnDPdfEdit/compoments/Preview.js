import React, { useState } from 'react';
import { Button } from 'antd';
import { preview } from 'zero-element/lib/utils/request';
import { EyeOutlined } from '@ant-design/icons';
export default function PageConfig({
  name,
  onGetData,
  dispatch
}) {
  const [loading, setLoading] = useState(false);

  function handlePreview() {
    setLoading(true);
    preview(`/api/io/pdf/export/preview/${name}`, {}).finally(_ => setLoading(false));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(EyeOutlined, null),
    loading: loading,
    style: {
      marginRight: 4
    },
    onClick: handlePreview
  }, "\u9884\u89C8"));
}