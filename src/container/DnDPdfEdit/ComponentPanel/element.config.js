export default [
  {
    title: '文本', type: 'Text', options: {
      field: {},
      base: {
        data: {
          label: 'data',
          value: '纯文本',
        },
      },
      style: {
        height: {
          label: '高度',
          type: 'number',
          value: 25,
        },
      },
    },
  },
  {
    title: '信息栏', type: 'Content', options: {
      field: {},
      base: {
        columnWidths: {
          label: 'columnWidths',
          type: 'array',
          value: '1,2',
        },
        title: {
          label: 'title',
          type: 'array',
          value: '标题1,标题2',
        },
        data: {
          label: 'data',
          type: 'array',
          value: '内容1,内容2',
        },
      },
      style: {
        height: {
          label: '高度',
          type: 'number',
          value: 44,
        },
      },
    },
  },
  {
    title: '表格', type: 'Table', options: {
      field: {},
      base: {
      },
      pdf: true,
      table: [
        // {
        //   label: '名称', value: 'name',
        //   options: {
        //     type: 'plain', // plain input number date ...
        //   }
        // },
      ],
    }
  },
  // {
  //   title: '纯文本', type: 'Plain', options: {
  //     field: {},
  //     base: {
  //       label: {
  //         label: '字段名',
  //       },
  //       value: {
  //         label: '文本',
  //         value: '纯文本',
  //       },
  //     },
  //     style: {
  //       color: {
  //         label: '颜色',
  //         value: '#666666',
  //       },
  //       textAlign: {
  //         label: '对齐',
  //         type: 'radio',
  //         options: [
  //           { label: '左', value: 'left' },
  //           { label: '中', value: 'center' },
  //           { label: '右', value: 'right' },
  //         ],
  //         value: 'left',
  //       },
  //       fontSize: {
  //         label: '字号',
  //         type: 'radio',
  //         options: [
  //           { label: '小', value: '12px' },
  //           { label: '默认', value: '14px' },
  //           { label: '中', value: '16px' },
  //           { label: '大', value: '18px' },
  //         ],
  //         value: '14px',
  //       },
  //       padding: {
  //         label: '内间距',
  //         value: '0px 0px 0px 0px',
  //       },
  //       margin: {
  //         label: '外间距',
  //         value: '0px 0px 0px 0px',
  //       },
  //     },
  //   }
  // },
  // {
  //   title: '输入下横线', type: 'InputUnderline', options: {
  //     field: {},
  //     base: {
  //       label: {
  //         label: '字段名',
  //       },
  //       value: {
  //         label: '内容',
  //         value: '',
  //       },
  //     },
  //     rules: {
  //       required: {
  //         label: '必填',
  //         value: undefined,
  //       },
  //     },
  //   }
  // },
  // {
  //   title: '多选框', type: 'Checkbox', options: {
  //     field: {},
  //     base: {
  //       label: {
  //         label: '字段名',
  //       },
  //       // value: {
  //       //   label: '默认值',
  //       //   value: '1',
  //       // }
  //     },
  //     items: [
  //       { label: '选项1', value: 1 },
  //       { label: '选项2', value: 2 }
  //     ],
  //     rules: {
  //       required: {
  //         label: '必填',
  //         value: undefined,
  //       },
  //     },
  //   }
  // },
  // {
  //   title: '分组', type: 'Group', options: {
  //     field: {},
  //     base: {
  //       value: {
  //         label: '分组名',
  //         value: '分组',
  //       },
  //     },
  //   }
  // },
  // {
  //   title: '二维码', type: 'Qrcode', options: {
  //     field: {},
  //     base: {
  //       value: {
  //         label: '二维码',
  //         value: '二维码值',
  //       },
  //     },
  //   }
  // },
  {
    title: '条形码', type: 'Barcode', options: {
      field: {},
      base: {
        value: {
          label: '条形码',
          value: '条形码值',
        },
      },
    }
  },
  {
    title: '图片', type: 'Image', options: {
      field: {},
      base: {
        value: {
          label: '图片URL',
          value: '图片',
        },
      },
      style: {
        width: {
          label: '宽度',
          type: 'number',
          value: 200,
        },
        height: {
          label: '高度',
          type: 'number',
          value: 200,
        },
      },
    }
  },
  {
    title: '矩形', type: 'Rectangle', options: {
      field: {},
      base: {
      },
      style: {
        width: {
          label: '宽度',
          type: 'number',
          value: 842,
        },
        height: {
          label: '高度',
          type: 'number',
          value: 70,
        },
        backgroundColor: {
          label: '底色',
          type: 'radio',
          options: [
            { label: '黑', value: 'BLACK' },
            { label: '白', value: 'WHITE' },
            { label: '红', value: 'RED' },
            { label: '黄', value: 'YELLOW' },
            { label: '蓝', value: 'BLUE' },
            { label: '绿', value: 'GREEN' },
          ],
          value: 70,
        },
      },
    }
  },
];