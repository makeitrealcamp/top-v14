
import React, { useReducer, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'


const intialState = [{ id: 1, title: 'Demo task', status: false }]
/**
 * Object {
 * id:
 * Title:
 * Description: -> textarea
 * Status:
 * }
 * Validations -> no empty 
 */

export const TaskInput = () => {
  const ref = useRef()

  const [editMode, setEditMode] = useState(false)

  const reducer = (state, action) => {
    switch (action.type) {
      case 'create':
        return [...state, action.payload]
      case 'delete':
        return state.filter(task => task.id !== action.payload)
      case 'edit':
        return state.map(task => {
          const { id, title } = action.payload
          if (task.id === id) {
            return { ...task, title }
          } else {
            return task
          }
        })
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, intialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editMode) {

      dispatch({
        type: 'edit',
        payload: { id: Number(ref.current.id), title: ref.current.value }
      })
      setEditMode(false)
    } else {
      dispatch({
        type: 'create',
        payload: { id: Date.now(), title: ref.current.value, status: false }
      })
    }
    ref.current.value = '';
  }

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      payload: id
    })
  }


  const handleEdit = (id) => {
    setEditMode(true);
    const [currentTask] = state.filter(task => task.id === id)

    ref.current.value = currentTask.title;
    ref.current.id = id

  }

  return (<>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Title" name='title' ref={ref} />
      </Form.Group>
      <Button type='submit' >{editMode ? 'Edit Task' : 'Create task'}</Button>
    </Form>
    <ul>

      {state.map(({ id, title, status }) => (
        <li key={id}>
          {title}
          <Button variant='danger' onClick={() => handleDelete(id)} >
            Delete
          </Button>

          <Button onClick={() => handleEdit(id)} >
            Edit
          </Button>

        </li>
      ))}
    </ul>
  </>
  )
}
