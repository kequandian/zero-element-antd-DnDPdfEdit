import React, { useMemo } from 'react';

export default ({ config }) => {
  const { options = {} } = config;
  const { base = {}, style = {} } = options;
  const { title = {}, data = {} } = base;

  const styleObj = useMemo(() => {
    const rst = {};
    Object.keys(style).forEach(key => rst[key] = style[key].value);
    return rst;
  }, [style]);

  let titleList = [];
  let dataList = [];

  if (title.value) {
    titleList = title.value.split(',');
  }
  if (data.value) {
    dataList = data.value.split(',');
  }

  return <div style={styleObj}>
    {titleList.map((item, i) => {
      return <div key={i}>{item}: {dataList[i]}</div>
    })}
  </div>;
}