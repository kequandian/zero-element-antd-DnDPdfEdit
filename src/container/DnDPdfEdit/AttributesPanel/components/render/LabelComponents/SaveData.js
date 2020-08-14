import React, { useRef, useEffect, useState } from 'react';
import { arrayItemMove } from 'zero-element-antd/lib/utils/tool';
import { Button } from 'antd';
import {
  PlusOutlined,
} from '@ant-design/icons';
import ItemEdit from '../../ItemEdit';

export default function SaveData(props) {
  const {
    field, label, value,
    tLabel = '把这个字段的数据',
    tValue = '保存为另一个字段',
    handle,
  } = props;
  const [listData, setListData] = useState([]);
  const countId = useRef(0);

  useEffect(_ => {
    if (value) {
      setListData(
        Object.keys(value).map(key => {
          return {
            label: value[key],
            field: key,
          }
        })
      );
    }
  }, [value]);

  function handleAppend() {
    countId.current = countId.current + 1;

    listData.push({
      label: `name_${countId.current}`,
      field: `name_${countId.current}`,
    });

    saveData();
  }
  function onChange(index, type, e) {
    const v = e.target.value;
    listData[index][type] = v;

    saveData();
  }
  function handleItemIndexChange(type, index) {
    arrayItemMove(listData, type, index);

    saveData();
  }
  function onRemove(index) {
    listData.splice(index, 1);

    saveData();
  }
  function saveData() {
    const data = {};
    listData.forEach(item => {
      data[item.field] = item.label;
    })
    handle(field, {
      target: {
        value: data,
      }
    });
  }

  return <>
    <div>{label}</div>
    <Button icon={<PlusOutlined />} onClick={handleAppend}>添加额外保存数据</Button>
    <br /><br />
    <ItemEdit
      text={{
        label: tLabel,
        value: tValue,
      }}
      valueField="field"
      items={listData}
      onChange={onChange}
      onRemove={onRemove}
      onIndexChange={handleItemIndexChange}
    />
  </>
}