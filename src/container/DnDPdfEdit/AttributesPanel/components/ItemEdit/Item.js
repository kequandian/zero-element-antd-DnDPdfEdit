import React from 'react';
import { Card, Input, Select, InputNumber } from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons';
import MapModal from './MapModal';
import Options from './Options';

import './index.css';

const { Option } = Select;

export default function ItemEdit(props) {
  const {
    label, index, options,
    valueField = 'value',
    disabled, // 禁用 options 的编辑,
    text: {
      label: tLabel = '文本',
      value: tValue = '值',
    },
    editId,
    optionsField = [],
    onClick,
    onChange, onRemove, onOptionsChange, onVisible,
    onIndexChange,
  } = props;
  const edit = editId === index;

  function handleClick() {
    onClick(index);
  }
  function handleMoveUp() {
    onIndexChange('up', index);
  }
  function handleMoveDown() {
    onIndexChange('down', index);
  }

  function handleChange(value) {
    onChange(index, valueField, {
      target: {
        value,
      }
    })
  }

  function handleWidthChange(value) {
    onChange(index, 'columnWidth', {
      target: {
        value,
      }
    })
  }

  function handleMapChange(value) {
    onChange(index, 'map', {
      target: {
        value,
      }
    })
  }

  return <Card
    size="small"
    className={edit ? 'ZEleA-DnDFormEdit-ItemEdit-editing' : undefined}
    title={<div className="ZEleA-DnDFormEdit-ItemEdit-title"
      onClick={handleClick}>
      {label}
    </div>}
    extra={<div>
      <ArrowUpOutlined
        className="ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit"
        onClick={handleMoveUp}
      />
      <ArrowDownOutlined
        className="ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit"
        onClick={handleMoveDown}
      />
      {onVisible ? (
        options.visible ?
          <EyeOutlined
            className="ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-delete"
            onClick={onVisible.bind(null, index)}
          />
          : <EyeInvisibleOutlined
            className="ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-delete"
            onClick={onVisible.bind(null, index)}
          />
      ) : null}
      {onRemove ? (
        <DeleteOutlined
          className="ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-delete"
          onClick={onRemove.bind(null, index)}
        />
      ) : null}
      {edit ? <UpOutlined
        className="ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit"
        onClick={handleClick}
      />
        : <DownOutlined
          className="ZEleA-DnDFormEdit-ItemEdit-icon ZEleA-DnDFormEdit-ItemEdit-icon-edit"
          onClick={handleClick}
        />}
    </div>}
    bodyStyle={{
      display: edit ? 'block' : 'none',
    }}
  >
    <span>{tLabel}: </span>
    <Input value={label} onChange={onChange.bind(null, index, 'label')} />
    <span>{tValue}: </span>
    <Input value={props[valueField]} readOnly />
    <span>列宽: </span>
    <div>
      <InputNumber value={props.columnWidth} onChange={handleWidthChange} min={1} />
    </div>
    <span>数据映射: </span>
    <div>
      <MapModal
        value={props.map}
        onChange={handleMapChange}
      />
    </div>
    {/* <Select
      style={{ width: 182 }}
      value={props[valueField]}
      onChange={handleChange}
    >
      {optionsField.map(key => {
        return <Option key={key} value={key}>{key}</Option>
      })}
    </Select> */}
    <Options
      index={index}
      data={options}
      disabled={disabled}
      onChange={onOptionsChange}
    />
  </Card>
}