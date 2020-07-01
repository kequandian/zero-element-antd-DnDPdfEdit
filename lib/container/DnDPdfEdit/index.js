"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/spin/style/css");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/button/style/css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/message/style/css");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _format = require("zero-element/lib/utils/format");

var _lifeCycle = require("zero-element/lib/utils/hooks/lifeCycle");

var _useBaseForm = _interopRequireDefault(require("zero-element/lib/helper/form/useBaseForm"));

var _PageContext = _interopRequireDefault(require("zero-element/lib/context/PageContext"));

var _layoutFlex = require("layout-flex");

var _global = _interopRequireDefault(require("zero-element/lib/config/global"));

var _ComponentPanel = _interopRequireDefault(require("./ComponentPanel"));

var _EchoPanel = _interopRequireDefault(require("./EchoPanel"));

var _AttributesPanel = _interopRequireDefault(require("./AttributesPanel"));

var _context = _interopRequireDefault(require("./utils/context"));

var _dispatchState = _interopRequireDefault(require("./utils/dispatchState"));

var _format2 = _interopRequireDefault(require("./utils/format"));

var _Item = require("./utils/Item");

var _Panel = _interopRequireDefault(require("zero-element-antd/lib/components/Panel"));

var _Preview = _interopRequireDefault(require("./compoments/Preview"));

var _PageConfig = _interopRequireDefault(require("./compoments/PageConfig"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var FlexItem = _layoutFlex.Flex.FlexItem;
var initState = {
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
  var onSubmit = props.onSubmit,
      onGetFormRef = props.onGetFormRef,
      initData = props.initData;
  var formRef = (0, _react.useRef)({});

  var _useReducer = (0, _react.useReducer)(_dispatchState["default"], initState, function () {
    return JSON.parse(JSON.stringify(initState));
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var fields = state.fields,
      tableFields = state.tableFields,
      config = state.config,
      copyList = state.copyList,
      page = state.page,
      spinning = state.spinning,
      spinningTip = state.spinningTip,
      headerField = state.headerField;
  var _props$config = props.config,
      API = _props$config.API,
      path = _props$config.path;
  var context = (0, _react.useContext)(_PageContext["default"]);
  var namespace = context.namespace;
  var formProps = (0, _useBaseForm["default"])({
    namespace: namespace,
    modelPath: 'formData'
  }, props.config);
  var router = _global["default"].router;
  var originFields = (0, _react.useRef)([]);
  (0, _lifeCycle.useDidMount)(function (_) {
    if ((0, _typeof2["default"])(initData) === 'object') {
      var _initData$originConfi = initData.originConfig,
          originConfig = _initData$originConfi === void 0 ? {} : _initData$originConfi;
      dispatch({
        type: 'initConfig',
        payload: initData
      });
      (0, _Item.setInitId)(originConfig.finalId, originConfig.fieldCount);
    }

    if (API.getAPI) {
      dispatch({
        type: 'save',
        payload: {
          spinning: true,
          spinningTip: '正在读取……'
        }
      });
      formProps.handle.onGetOne({}).then(function (_ref) {
        var code = _ref.code,
            data = _ref.data;
        var name = data.name,
            originConfig = data.originConfig,
            apiField = data.apiField,
            headerField = data.headerField,
            templateContent = data.templateContent;

        if (code === 200) {
          originFields.current = data.fields;

          if (originConfig) {
            var jsonConfig = JSON.parse(originConfig);
            dispatch({
              type: 'save',
              payload: {
                config: jsonConfig
              }
            });
            (0, _Item.setInitId)(jsonConfig.finalId, jsonConfig.fieldCount);
          }

          dispatch({
            type: 'initConfig',
            payload: _objectSpread({}, data)
          });
        }
      })["finally"](function (_) {
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
    var _formatToConfig = (0, _format2["default"])(config, state.name),
        _formatToConfig2 = (0, _slicedToArray2["default"])(_formatToConfig, 1),
        data = _formatToConfig2[0];

    var submitData = {
      templateContent: JSON.stringify(_objectSpread({}, data, {
        page: page
      })),
      originConfig: JSON.stringify(_objectSpread({}, config, {
        finalId: _Item.assigned,
        fieldCount: _Item.fieldCount
      }))
    };
    return submitData;
  }

  function handleSave() {
    var method = API.updateAPI ? formProps.handle.onUpdateForm : formProps.handle.onCreateForm;
    var submitData = handleGetSubmitData();

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
    }).then(function (_) {
      _message2["default"].success('保存成功');

      if (path && router) {
        var fPath = (0, _format.formatAPI)(path, {
          namespace: namespace
        });
        router(fPath);
      }
    })["finally"](function (_) {
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

    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_button["default"], {
      type: "primary",
      onClick: handleSave
    }, "\u4FDD\u5B58"));
  }

  formRef.current = {
    onSubmit: handleSave
  };
  return _react["default"].createElement(_context["default"].Provider, {
    value: state
  }, _react["default"].createElement(_layoutFlex.Flex, null, _react["default"].createElement(FlexItem, {
    flex: 1
  }, _react["default"].createElement(_spin["default"], {
    spinning: spinning,
    tip: spinningTip
  }, _react["default"].createElement(_Preview["default"], {
    name: state.name,
    onGetData: handleGetSubmitData,
    dispatch: dispatch
  }), _react["default"].createElement(_PageConfig["default"], {
    dispatch: dispatch,
    page: page
  }), renderSubmitButton(), _react["default"].createElement(_Panel["default"], {
    title: "Pdf \u753B\u5E03"
  }, _react["default"].createElement(_EchoPanel["default"], {
    config: config,
    dispatch: dispatch,
    state: state
  })))), _react["default"].createElement(FlexItem, {
    style: {
      width: '256px'
    }
  }, _react["default"].createElement(_ComponentPanel["default"], {
    dispatch: dispatch,
    copyList: copyList
  }), _react["default"].createElement(_AttributesPanel["default"], {
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
  var records = {};
  lowList.forEach(function (f) {
    records[f.field] = f;
  });
  midList.forEach(function (f) {
    var target = records[f.field];

    if (target && target.label === target.field) {
      records[f.field] = f;
    }
  });
  highList.forEach(function (f) {
    records[f.field] = f;
  });
  return Object.values(records);
}

var _default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend["default"])(DndFormEdit);

exports["default"] = _default;