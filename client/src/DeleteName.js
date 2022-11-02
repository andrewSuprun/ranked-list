import axios from 'axios'

import { API_URL } from './config'
import Button from 'react-bootstrap/Button'

export const DeleteName = ({ id }) => {
  function handleClick() {
    deleteRequest(id)
    document.location.reload(true)
  }

  const deleteRequest = async (id) => {
    console.log('I amm', `${API_URL}names/${id}`)
    await axios.delete(`${API_URL}names/${id}`)
  }

  return (
    <div>
      <Button variant="danger" onClick={handleClick}>
        Delete
      </Button>
    </div>
  )
}
