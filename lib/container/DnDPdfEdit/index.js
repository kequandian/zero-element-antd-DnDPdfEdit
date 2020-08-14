/**
 * 依赖
 * qrcode.react
 * jsbarcode
 */
import React, { useReducer, useRef } from 'react';
import { Button, Spin, message } from 'antd';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { formatAPI } from 'zero-element/lib/utils/format';
import { useDidMount } from 'zero-element/lib/utils/hooks/lifeCycle';
import useBaseForm from 'zero-element/lib/helper/form/useBaseForm';
import { Flex } from 'layout-flex';
import global from 'zero-element/lib/config/global';
import ComponentPanel from "./ComponentPanel";
import EchoPanel from "./EchoPanel";
import AttributesPanel from "./AttributesPanel";
import DnDContext from "./utils/context";
import handleState from "./utils/dispatchState";
import formatToConfig from "./utils/format";
import { assigned, fieldCount, setInitId } from "./utils/Item";
import Panel from 'zero-element-antd/lib/components/Panel';
import Preview from "./compoments/Preview";
import PageConfig from "./compoments/PageConfig";
const {
  FlexItem
} = Flex;
const initState = {
  current: {},
  // 当前编辑的元素
  name: '',
  // 表单名称
  fields: [],
  config: {
    id: 0,
    title: 'pdf',
    type: 'Canvas',
    items: []
  },
  copyList: [],
  spinning: false,
  spinningTip: '',
  page: {
    pageName: 'A4',
    rotate: true,
    margin: 40
  }
};

function DndFormEdit(props) {
  const {
    namespace,
    onSubmit,
    onGetFormRef,
    initData
  } = props;
  const formRef = useRef({});
  const [state, dispatch] = useReducer(handleState, initState, () => JSON.parse(JSON.stringify(initState)));
  const {
    fields,
    tableFields,
    config,
    copyList,
    page,
    spinning,
    spinningTip,
    headerField
  } = state;
  const {
    API,
    path
  } = props.config;
  const formProps = useBaseForm({
    namespace,
    modelPath: 'formData'
  }, props.config);
  const {
    router
  } = global;
  const originFields = useRef([]);
  useDidMount(_ => {
    if (typeof initData === 'object') {
      const {
        originConfig = {}
      } = initData;
      dispatch({
        type: 'initConfig',
        payload: initData
      });
      setInitId(originConfig.finalId, originConfig.fieldCount);
    }

    if (API.getAPI) {
      dispatch({
        type: 'save',
        payload: {
          spinning: true,
          spinningTip: '正在读取……'
        }
      });
      formProps.handle.onGetOne({}).then(({
        code,
        data
      }) => {
        const {
          name,
          originConfig,
          apiField,
          headerField,
          templateContent
        } = data;

        if (code === 200) {
          originFields.current = data.fields;

          if (originConfig) {
            const jsonConfig = JSON.parse(originConfig);
            dispatch({
              type: 'save',
              payload: {
                config: jsonConfig
              }
            });
            setInitId(jsonConfig.finalId, jsonConfig.fieldCount);
          }

          dispatch({
            type: 'initConfig',
            payload: { ...data
            }
          });
        }
      }).finally(_ => {
        dispatch({
          type: 'save',
          payload: {
            spinning: false,
            spinningTip: ''
          }
        });
      });
    }

    if (typeof onGetFormRef === 'function') {
      onGetFormRef(formRef);
    }
  });

  function handleGetSubmitData() {
    const [data] = formatToConfig(config, state.name);
    const submitData = {
      templateContent: JSON.stringify({ ...data,
        page: page
      }),
      originConfig: JSON.stringify({ ...config,
        finalId: assigned,
        fieldCount: fieldCount
      })
    };
    return submitData;
  }

  function handleSave() {
    const method = API.updateAPI ? formProps.handle.onUpdateForm : formProps.handle.onCreateForm;
    const submitData = handleGetSubmitData();

    if (onSubmit) {
      onSubmit(submitData);
      return false;
    }

    dispatch({
      type: 'save',
      payload: {
        spinning: true,
        spinningTip: '正在保存……'
      }
    });
    method({
      fields: submitData
    }).then(_ => {
      message.success('保存成功');

      if (path && router) {
        const fPath = formatAPI(path, {
          namespace
        });
        router(fPath);
      }
    }).finally(_ => {
      dispatch({
        type: 'save',
        payload: {
          spinning: false,
          spinningTip: ''
        }
      });
    });
  }

  function renderSubmitButton() {
    if (typeof onSubmit === 'function') {
      return null;
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: handleSave
    }, "\u4FDD\u5B58"));
  }

  formRef.current = {
    onSubmit: handleSave
  };
  return /*#__PURE__*/React.createElement(DnDContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(FlexItem, {
    flex: 1
  }, /*#__PURE__*/React.createElement(Spin, {
    spinning: spinning,
    tip: spinningTip
  }, /*#__PURE__*/React.createElement(Preview, {
    name: state.name,
    onGetData: handleGetSubmitData,
    dispatch: dispatch
  }), /*#__PURE__*/React.createElement(PageConfig, {
    dispatch: dispatch,
    page: page
  }), renderSubmitButton(), /*#__PURE__*/React.createElement(Panel, {
    title: "Pdf \u753B\u5E03"
  }, /*#__PURE__*/React.createElement(EchoPanel, {
    config: config,
    dispatch: dispatch,
    state: state
  })))), /*#__PURE__*/React.createElement(FlexItem, {
    style: {
      width: '256px'
    }
  }, /*#__PURE__*/React.createElement(ComponentPanel, {
    dispatch: dispatch,
    copyList: copyList
  }), /*#__PURE__*/React.createElement(AttributesPanel, {
    current: state.current,
    dispatch: dispatch,
    fields: fields,
    tableFields: tableFields,
    API: API,
    headerField: headerField
  }))));
}
/**
 * 合并成唯一的字段列表
 *
 * @param {array} lowList
 * @param {array} midList
 * @param {array} highList
 * @returns
 */


function uniqueFields(lowList, midList, highList) {
  const records = {};
  lowList.forEach(f => {
    records[f.field] = f;
  });
  midList.forEach(f => {
    const target = records[f.field];

    if (target && target.label === target.field) {
      records[f.field] = f;
    }
  });
  highList.forEach(f => {
    records[f.field] = f;
  });
  return Object.values(records);
}

export default DragDropContext(HTML5Backend)(DndFormEdit);