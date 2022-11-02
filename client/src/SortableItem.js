import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { DeleteName } from './DeleteName'
import { ModalEdit } from './ModalEdit'

const SortableItem = (props) => {
  return (
    <li>
      <div>
        {props.rank} {props.name}
        <DeleteName id={props.id} /> <ModalEdit id={props.id} />
      </div>
    </li>
  )
}

export default SortableElement(SortableItem)
