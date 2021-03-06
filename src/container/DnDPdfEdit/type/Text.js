import React, { useMemo } from 'react';

export default ({ config }) => {
  const { options = {} } = config;
  const { base = {}, style = {} } = options;
  const { data = {} } = base;
  const styleObj = useMemo(() => {
    const rst = {};
    Object.keys(style).forEach(key => rst[key] = style[key].value);
    return rst;
  }, [style]);

  return <div style={styleObj}>{data.value}</div>;
}