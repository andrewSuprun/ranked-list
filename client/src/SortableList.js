import React from 'react';
import SortableItem from './SortableItem';
import { SortableContainer } from 'react-sortable-hoc';

const SortableList = (props) => {
  return (
    <ul>
      {props.items.map((value, index) => (
        <SortableItem
         key={`item-${index}`}
         index={index} 
         name = {value} 
         rank = {index + 1}
          />
      ))}
    </ul>
  );
}

export default SortableContainer(SortableList);