import React from 'react';
import { Table } from 'antd';
import { useWillMount } from 'zero-element/lib/utils/hooks/lifeCycle';
export default function STable(props) {
  const {
    config,
    state,
    dispatch
  } = props;
  const {
    options = {}
  } = config;
  const {
    base = {},
    table = []
  } = options;
  const {
    headerField
  } = state;
  useWillMount(initData);

  function initData() {
    if (Array.isArray(headerField)) {
      table.splice(0, table.length, ...headerField.map(key => ({
        label: key,
        value: key,
        columnWidth: 1,
        map: {},
        options: {
          type: 'plain',
          visible: true
        }
      })));
      onSave();
    }
  }

  function onSave() {
    dispatch({
      type: 'editElement',
      payload: { ...config
      }
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, {
    dataSource: [],
    columns: table.filter(i => i.options.visible).map(item => {
      return {
        title: item.label,
        dataIndex: item.value,
        key: item.value
      };
    })
  }));
}