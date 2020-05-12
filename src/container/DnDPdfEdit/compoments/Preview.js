import React from 'react';
import { Button } from 'antd';
import { preview } from 'zero-element/lib/utils/request';

export default function PageConfig({ name, onGetData, dispatch }) {

  function handlePreview() {
    preview(`/api/io/pdf/export/preview/${name}`, {});
  }

  return <>
    <Button
      icon="eye"
      style={{ marginRight: 4 }}
      onClick={handlePreview}
    >预览</Button>
  </>
}