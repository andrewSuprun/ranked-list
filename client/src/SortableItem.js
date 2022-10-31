import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const SortableItem = (props) => {
  return <li>{props.name} {props.rank}</li>
}

export default SortableElement(SortableItem);