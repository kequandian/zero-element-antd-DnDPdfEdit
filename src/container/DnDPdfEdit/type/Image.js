import React from 'react';
import ImageView from 'zero-element-antd/lib/components/ImageView';

export default (props) => {
  const { config } = props;
  const { options = {} } = config;
  const { value = {}, placeholder = {} } = options.base || {};

  return <div>
    {value.value ? (
      <ImageView
        value={value.value}
      />
    ) : (
        <div>暂无图片</div>
      )}
  </div>
}