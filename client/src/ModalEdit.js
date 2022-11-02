import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React, { useState, useRef } from 'react'
import { API_URL } from './config'
import axios from 'axios'

export function MyVerticallyCenteredModal(props) {
  const inputRef = useRef(null)

  function handleClick() {
    console.log('value 👉️', inputRef.current.value)
    const input = inputRef.current.value
    putRequest(props.id, input)
    inputRef.current.value = ''
    document.location.reload(true)
  }

  const putRequest = async (id, input) => {
    await axios.put(`${API_URL}names/${id}`, {
      name: input,
    })
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Change name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <input ref={inputRef} type="text" id="message" name="message" />

          <button onClick={handleClick}>Change</button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export function ModalEdit({ id }) {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Edit
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
      />
    </>
  )
}
