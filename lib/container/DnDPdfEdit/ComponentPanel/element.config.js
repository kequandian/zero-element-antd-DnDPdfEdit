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
}, // {
//   title: 'content', type: 'Content', options: {
//     field: {},
//     base: {
//       name: {
//         label: 'content',
//       },
//       columnWidths: {
//         label: 'columnWidths',
//         value: [1, 2],
//       },
//       title: {
//         label: 'title',
//         value: [1, 2],
//       },
//       data: {
//         label: 'data',
//         value: [1, 2],
//       },
//       height: {
//         label: '高度',
//         value: 25,
//       },
//     },
//   },
// },
{
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