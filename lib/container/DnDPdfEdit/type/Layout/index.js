import React from 'react';
import Container from "./Container";
import OnlyElemContainer from "./OnlyElemContainer";
import Element from "./Element";
export default (props => {
  const {
    itemCfg = {},
    config,
    index,
    dispatch,
    state
  } = props;
  const {
    items
  } = config;

  function handleRemove(i, e) {
    e && e.stopPropagation && e.stopPropagation();
    dispatch({
      type: 'delElement',
      payload: {
        id: config.id,
        index: i
      }
    });
  }

  function handleActiveEdit(i) {
    dispatch({
      type: 'currentEdit',
      payload: items[i]
    });
  }

  function handleCopyElement(i, e) {
    e && e.stopPropagation && e.stopPropagation();
    dispatch({
      type: 'copyElement',
      payload: items[i]
    });
  }

  function handlePaste() {
    dispatch({
      type: 'pasteElement',
      payload: {
        layoutId: config.id,
        index
      }
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, itemCfg && itemCfg.id ? itemCfg.layout ? /*#__PURE__*/React.createElement(OnlyElemContainer, {
    layoutId: config.id,
    index: index,
    onPaste: handlePaste
  }) : /*#__PURE__*/React.createElement(Element, {
    index: index,
    data: itemCfg,
    state: state,
    dispatch: dispatch,
    onRemove: handleRemove,
    onEdit: handleActiveEdit,
    onCopy: handleCopyElement
  }) : /*#__PURE__*/React.createElement(Container, {
    layoutId: config.id,
    index: index,
    onPaste: handlePaste
  }));
});