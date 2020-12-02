import React, { useState, useRef } from 'react';
import { Button, Typography, Modal, Row, Col, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

export default function MapModal({ value, onChange }) {
  const [visible, setVisible] = useState(false);
  const keyRef = useRef();
  const valueRef = useRef();

  function handleOpen() {
    keyRef.current = '';
    valueRef.current = '';
    setVisible(true);
  }

  function handleAppend() {
    value[keyRef.current] = valueRef.current;
    onChange({
      ...value,
    });
    setVisible(false);
  }
  function handleRemove(key) {
    delete value[key];
    onChange({
      ...value,
    });
  }

  return <>
    <Button onClick={handleOpen}>新增映射</Button>
    <br /><br />
    {Object.keys(value).map(key => {
      return <Paragraph key={key}>
        <Text keyboard>{key}</Text>=><Text keyboard>{value[key]}</Text>
        <DeleteOutlined
          className="ZEleA-DnDFormEdit-ItemEdit-icon-delete"
          onClick={handleRemove.bind(null, key)}
        />
      </Paragraph>
    })}
    <Modal
      destroyOnClose
      visible={visible}
      onOk={handleAppend}
      onCancel={_ => setVisible(false)}
    >
      <Row>
        <Col>
          <Input placeholder="将字段" onChange={e => keyRef.current = e.target.value} />
        </Col>
        <Col>
          <Input placeholder="映射为" onChange={e => valueRef.current = e.target.value} />
        </Col>
      </Row>
    </Modal>
  </>
}