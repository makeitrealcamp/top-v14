import React, { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';

export const MainForm = () => {

  const lastNameRef = useRef()

  const [state, setState] = useState('');
  const [error, setError] = useState({ type: '', status: false })
  // const [lastname, setLastname] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form clicked')

    if (lastNameRef.current.value.length < 5) {
      setError({ type: 'lastname', status: true })
    } else {
      setError({ type: '', status: false })
    }

    console.table({ name: state, lastname: lastNameRef.current.value })

    localStorage.setItem('data', JSON.stringify({ name: state, lastname: lastNameRef.current.value }))
    setState('')
    lastNameRef.current.value = ''

  }

  const handleOnchange = (e) => {
    console.log(e.target.value.length)

    if (state.length < 5) {
      setError({ type: 'name', status: true })
    } else {
      setError({ type: '', status: false })

    }
    setState(e.target.value)


  }
  // console.log('this is state', state);


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Enter your name</label>
      <input type="text" name='name'
        onChange={handleOnchange}
        value={state}
      />



      <label htmlFor="lastname">last name</label>
      <input type="text"
        ref={lastNameRef}
      />

      {error.status && (
        <Alert variant={'danger'}>
          {error.type} Must be at least 5 char
        </Alert>
      )}

      <button type='submit' >Submit</button>
    </form>
  )
}
