"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  title: '文本',
  type: 'Text',
  options: {
    field: {},
    base: {
      data: {
        label: 'data',
        value: '纯文本'
      }
    },
    style: {
      height: {
        label: '高度',
        type: 'number',
        value: 25
      }
    }
  }
}, {
  title: '信息栏',
  type: 'Content',
  options: {
    field: {},
    base: {
      columnWidths: {
        label: 'columnWidths',
        type: 'array',
        value: '1,2'
      },
      title: {
        label: 'title',
        type: 'array',
        value: '标题1,标题2'
      },
      data: {
        label: 'data',
        type: 'array',
        value: '内容1,内容2'
      }
    },
    style: {
      height: {
        label: '高度',
        type: 'number',
        value: 44
      }
    }
  }
}, {
  title: '表格',
  type: 'Table',
  options: {
    field: {},
    base: {},
    expect: {},
    pdf: true,
    table: [// {
      //   label: '名称', value: 'name',
      //   options: {
      //     type: 'plain', // plain input number date ...
      //   }
      // },
    ]
  }
}];
exports["default"] = _default;