import React, { useState } from 'react';
import { Button } from 'antd';
import { preview } from 'zero-element/lib/utils/request';

export default function PageConfig({ name, onGetData, dispatch }) {
  const [loading, setLoading] = useState(false);

  function handlePreview() {
    setLoading(true);
    preview(`/api/io/pdf/export/preview/${name}`, {})
      .finally(_ => setLoading(false));
  }

  return <>
    <Button
      icon="eye"
      loading={loading}
      style={{ marginRight: 4 }}
      onClick={handlePreview}
    >预览</Button>
  </>
}