export default function formatToConfig(cfg, formName) {
  const {
    items = []
  } = cfg;
  const filterFields = items.filter(field => field);
  const config = {
    flows: []
  };
  filterFields.forEach(field => {
    config.flows.push(formatType(field));
  });
  return [config];
}

function formatType(options) {
  const {
    type
  } = options;
  const map = {
    Table: fTable,
    Grid: fGrid,
    Text: fText,
    Barcode: fBarcode,
    Image: fImage,
    Rectangle: fRectangle,
    Content: fContent
  };
  return (map[type] || fUndefined)(options);
}

function fUndefined() {
  return {};
}
/**
 * 返回数组内的比例
 * e.g.
 * [16, 8] => [2, 1]
 * @param {array} arr 
 * @returns {array}
 */


function computeScale(arr) {
  const min = Math.min(...arr);
  return arr.map(i => ~~(i / min));
}

function fGrid(opt) {
  const {
    value = [],
    items = []
  } = opt;
  const config = {
    name: 'linear',
    columnWidths: computeScale(value),
    elements: []
  };
  items.forEach(field => {
    config.elements.push(formatType(field));
  });
  return config;
}

function fTable(opt) {
  const {
    options
  } = opt;
  const {
    field,
    table = []
  } = options;
  const config = {
    name: 'table',
    columnWidths: [],
    columnsLayout: [],
    columnKeyBindings: [],
    converts: {},
    rowHeight: 50,
    headerHeight: 40,
    data: '${' + field.value + '}'
  };
  table.forEach(f => {
    const {
      label,
      value,
      columnWidth,
      map,
      options
    } = f;
    config.columnWidths.push(columnWidth);

    if (Object.keys(map).length) {
      config.converts[value] = map;
    }

    config.columnKeyBindings.push({
      key: value,
      column: label,
      // columnWidth,
      visible: options.visible
    });
  }); // config.columnWidths = new Array(config.columnKeyBindings.length).fill(1);

  return config;
}

function fText(opt) {
  const {
    options
  } = opt;
  const {
    field,
    base,
    style
  } = options;
  const config = {
    name: 'text',
    data: base.data.value,
    height: style.height.value
  };

  if (!base.data.value) {
    config.data = '${' + field.value + '}';
  }

  return config;
}

function fContent(opt) {
  const {
    options
  } = opt;
  const {
    field,
    base,
    style
  } = options;
  const {
    columnWidths,
    title,
    data
  } = base;
  const config = {
    name: 'content',
    data: base.data.value,
    columnWidths: columnWidths.value.split(','),
    title: title.value.split(','),
    data: data.value.split(','),
    height: style.height.value
  };

  if (!base.data.value) {
    config.data = '${' + field.value + '}';
  }

  return config;
}

function fBarcode(opt) {
  const {
    options
  } = opt;
  const {
    base,
    style
  } = options;
  const config = {
    name: 'barCode',
    data: base.value.value
  };
  return config;
}

function fImage(opt) {
  const {
    options
  } = opt;
  const {
    base,
    style
  } = options;
  const config = {
    name: 'image',
    url: base.value.value,
    width: style.width.value,
    height: style.height.value
  };
  return config;
}

function fRectangle(opt) {
  const {
    options
  } = opt;
  const {
    style
  } = options;
  const config = {
    name: 'rectangle',
    color: style.backgroundColor.value,
    width: style.width.value,
    height: style.height.value
  };
  return config;
}