import React, { useState, useEffect } from 'react';
import { arrayMoveImmutable } from 'array-move';
import SortableList from './SortableList';
import axios from 'axios'

function App() {
  const [items, setItems] = useState([]);

  const getAllNames = async () => {
    try {
      const allNames = await axios.get('http://localhost:8080/api/')
      setItems(allNames.map(el => (el.name)))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
		getAllNames();
	}, []);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
  };

  return (
    <div className="App">
      <SortableList items={items} onSortEnd={onSortEnd}  />
    </div>
  );
}

export default App;