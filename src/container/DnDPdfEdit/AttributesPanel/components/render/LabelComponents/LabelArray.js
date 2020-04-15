import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';

const { TextArea } = Input;

export default function LabelArray({ field, label, value, handle }) {

  const [dataSource, setDataSource] = useState([]);

  function handleInput(v) {
    handle(field, { target: { value: v } });

    setDataSource(
      !v ? [] : formatToSuggest(v)
    )
  };
  function handleChange(text) {
    handle(field, { target: { value: text } });
  }

  return <>
    <div>{label}</div>
    <AutoComplete
      dataSource={dataSource}
      style={{ width: 180 }}
      onSelect={handleChange}
      onChange={handleInput}
      value={value}
    >
      <TextArea
        placeholder="输入……"
        style={{ height: 50 }}
      // onKeyPress={handleChange}
      />
    </AutoComplete>
  </>
}

function formatToSuggest(v) {
  const rst = [];

  if (v) {
    // 通过 , 分割字符串
    rst.push(
      v
    );

    // 分割除了 , 之外的全部字符串
    const t = Array.from(
      new String(
        v.split(',').join('')
      )
    ).join(',');
    if (t !== v) {
      rst.push(t);
    }
  }

  return rst;
}