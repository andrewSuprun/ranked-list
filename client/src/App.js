import React, { useState, useEffect } from 'react'
import { arrayMoveImmutable } from 'array-move'
import SortableList from './SortableList'
import axios from 'axios'
import { API_URL } from './config'
import { AddName } from './AddName'

function App() {
  const [items, setItems] = useState([])

  const getAllNames = async () => {
    try {
      const allNames = await axios.get(API_URL)
      setItems(allNames.data.map((el) => `${el.name}, id ${el.id}`))
    } catch (error) {
      console.log(error)
    }
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems((prevItem) => arrayMoveImmutable(prevItem, oldIndex, newIndex))
  }

  useEffect(() => {
    getAllNames()
  }, [])

  return (
    <div className="App">
      <AddName />

      <SortableList items={items} onSortEnd={onSortEnd} />
    </div>
  )
}

export default App
