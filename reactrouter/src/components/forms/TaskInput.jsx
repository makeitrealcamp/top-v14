
import React, { useReducer, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { BsCheckCircle, BsCheckCircleFill, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";


const intialState = [{ id: 1, title: 'Demo task', description: '', status: false }]
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
  const titleRef = useRef();
  const descriptionRef = useRef();

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
      case 'status':
        return state.map(task => {
          const id = action.payload
          if (task.id === id) {
            return { ...task, status: !task.status }
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
        payload: {
          id: Number(titleRef.current.id),
          title: titleRef.current.value,
          description: descriptionRef.current.value
        }
      });
      setEditMode(false);
    } else {
      dispatch({
        type: 'create',
        payload: {
          id: Date.now(), title: titleRef.current.value,
          description: descriptionRef.current.value,
          status: false
        }
      });
    }
    titleRef.current.value = '';
    descriptionRef.current.value = '';
  }

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      payload: id
    });
  }
  const handleStatus = (id) => {
    dispatch({
      type: 'status',
      payload: id
    });
  }

  const handleEdit = (id) => {
    setEditMode(true);
    const [currentTask] = state.filter(task => task.id === id);
    titleRef.current.value = currentTask.title;
    descriptionRef.current.value = currentTask.description;
    titleRef.current.id = id;
  }

  return (<>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Title" name='title' ref={titleRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} ref={descriptionRef} />
      </Form.Group>
      <Button type='submit' >{editMode ? 'Edit Task' : 'Create task'}</Button>
    </Form>
    <ul>

      {state.map(({ id, title, status }) => (
        <li key={id} >
          {title}

          {/* <Button variant='danger' onClick={() => handleDelete(id)} >
            Delete
          </Button> */}
          {/* <Button onClick={() => handleEdit(id)} >
              Edit
            </Button> */}
          {!editMode &&
            (<>
              <BsFillTrashFill fontVariant={''} onClick={() => handleDelete(id)} style={{ color: 'red', cursor: 'pointer' }} />

              <BsFillPencilFill
                color='green'
                onClick={() => handleEdit(id)}
                style={{ cursor: 'pointer' }} />

              {status ?
                <BsCheckCircleFill
                  color='green'
                  onClick={() => handleStatus(id)}
                  style={{ cursor: 'pointer' }}
                /> :
                <BsCheckCircle
                  color='red'
                  onClick={() => handleStatus(id)}
                  style={{ cursor: 'pointer' }} />}
            </>
            )
          }
        </li>
      ))}
    </ul>
  </>
  )
}
