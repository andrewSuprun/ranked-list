import axios from 'axios'
import { useRef, useState } from 'react'
import { API_URL } from './config'

export const AddName = () => {
  const inputRef = useRef(null)

  function handleClick() {
    console.log('value 👉️', inputRef.current.value)
    const input = inputRef.current.value
    postRequest(input)
    inputRef.current.value = ''
    document.location.reload(true)
  }

  const postRequest = async (value) => {
    await axios.post(API_URL, {
      name: value,
    })
  }

  return (
    <div>
      <input ref={inputRef} type="text" id="message" name="message" />

      <button onClick={handleClick}>Add name</button>
    </div>
  )
}
