import React from 'react';
import { InputNumber } from 'antd';

export default function LabelNumber({ field, label, value, handle }) {

  function handleChange(number) {
    handle(field, { target: { value: number } });
  }

  return <>
    <div>{label}</div>
    <InputNumber
      value={value}
      onChange={handleChange}
    />
  </>
}