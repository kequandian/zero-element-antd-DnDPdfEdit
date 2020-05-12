import React, { useMemo } from 'react';
import ImageView from 'zero-element-antd/lib/components/ImageView';

export default (props) => {
  const { config } = props;
  const { options = {} } = config;
  const { base = {}, style = {} } = options;
  const { value = {} } = base;

  const styleObj = useMemo(() => {
    const rst = {};
    Object.keys(style).forEach(key => rst[key] = style[key].value);
    return rst;
  }, [style]);

  return <div>
    {value.value ? (
      <ImageView
        value={value.value}
        {...styleObj}
      />
    ) : (
        <div>暂无图片</div>
      )}
  </div>
}