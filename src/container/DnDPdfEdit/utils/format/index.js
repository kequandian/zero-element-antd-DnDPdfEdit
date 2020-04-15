
export default function formatToConfig(cfg, formName) {
  const { items = [] } = cfg;

  const filterFields = items.filter(field => field);

  const config = {
    flows: [],
    page: {
      pageName: 'A4',
      margin: '40',
    },
  }

  filterFields.forEach(field => {
    config.flows.push(
      formatType(field)
    );
  })

  return [config];
}

function formatType(options) {
  const { type } = options;

  const map = {
    Table: fTable,
    Grid: fGrid,
    Text: fText,
    Content: fContent,
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
  const { value = [], items = [] } = opt;
  const config = {
    name: 'linear',
    columnWidths: computeScale(value),
    elements: [],
  };

  items.forEach(field => {
    config.elements.push(
      formatType(field)
    );
  });

  return config;
}

function fTable(opt) {
  const { options } = opt;
  const { field, table = [] } = options;
  const config = {
    name: 'table',
    columnWidths: [],
    columnsLayout: [],
    columnKeyBindings: [],
    rowHeight: 50,
    headerHeight: 40,
    data: '${' + field.value + '}',
  };

  table.forEach(f => {
    const { label, value } = f;
    config.columnKeyBindings.push({
      key: value,
      column: value,
    });
  });

  config.columnWidths = new Array(config.columnKeyBindings.length).fill(1);

  return config;
}

function fText(opt) {
  const { options } = opt;
  const { field, base, style } = options;

  const config = {
    name: 'text',
    data: base.data.value,
    height: style.height.value,
  };

  if (!base.data.value) {
    config.data = '${' + field.value + '}';
  }

  return config;
}

function fContent(opt) {
  const { options } = opt;
  const { field, base, style } = options;
  const { columnWidths, title, data } = base;

  const config = {
    name: 'content',
    data: base.data.value,
    columnWidths: columnWidths.value.split(','),
    title: title.value.split(','),
    data: data.value.split(','),
    height: style.height.value,
  };

  if (!base.data.value) {
    config.data = '${' + field.value + '}';
  }

  return config;
}