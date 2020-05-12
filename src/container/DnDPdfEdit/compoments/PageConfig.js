import React, { useState, useRef } from 'react';
import { Modal, Button, Typography, Radio, InputNumber, Input } from 'antd';

const { Title } = Typography;

export default function PageConfig({ dispatch, page }) {
  const [visible, setVisible] = useState(false);
  const pageValue = useRef({});

  function handleVisible() {
    setVisible(!visible);
  }
  function handleChange(key, e) {
    let value;
    if (typeof e === 'object') {
      value = e.target.value;
    } else {
      value = e;
    }

    pageValue.current = {
      ...pageValue.current,
      [key]: value,
    };
  }
  function handleSave() {
    dispatch({
      type: 'save',
      payload: {
        page: {
          ...page,
          ...pageValue.current
        },
      }
    });
    handleVisible();
  }

  return <>
    <Button
      onClick={handleVisible}
      style={{ marginRight: 4 }}
    >页面配置</Button>
    <Modal
      destroyOnClose
      visible={visible}
      onOk={handleSave}
      onCancel={handleVisible}
    >
      <Title level={4}>尺寸</Title>
      <Radio.Group defaultValue={page.pageName} onChange={handleChange.bind(null, 'pageName')}>
        <Radio value="A3">A3</Radio>
        <Radio value="A4">A4</Radio>
        <Radio value="A5">A5</Radio>
      </Radio.Group>
      <br /><br />
      <Title level={4}>方向</Title>
      <Radio.Group defaultValue={page.rotate} onChange={handleChange.bind(null, 'rotate')}>
        <Radio value={true}>横向</Radio>
        <Radio value={false}>纵向</Radio>
      </Radio.Group>
      <br /><br />
      <Title level={4}>页面内间距</Title>
      <InputNumber
        defaultValue={page.margin}
        onChange={handleChange.bind(null, 'margin')}
      />
      <br /><br />
      <Title level={4}>页面背景图 URL</Title>
      <Input
        defaultValue={page.backgroundImageUrl}
        onChange={handleChange.bind(null, 'backgroundImageUrl')}
      />
    </Modal>
  </>
}