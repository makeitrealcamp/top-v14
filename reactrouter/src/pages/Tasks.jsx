import React, { useContext, useReducer, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { TaskFormContainer } from '../components/tasks/TaskFormContainer'

import taskReducer from '../components/tasks/reducers/taskReducer'
import { TaskView } from '../components/tasks/TaskView'
import { TaskContext } from '../context/TasksContext'

const intialState = [{ id: 1, title: 'Demo task', description: '', status: false }]


export const Tasks = () => {

  const context = useContext(TaskContext);
  console.log(context)

  const titleRef = useRef();
  const descriptionRef = useRef();
  const [editMode, setEditMode] = useState(false)

  const [state, dispatch] = useReducer(taskReducer, intialState)


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
  return (
    
    <Container fluid>
      <Row>
        <Col xs={4} id="sidebar-wrapper">
          {/* <TaskInput/> */}
          <TaskFormContainer
            editMode={editMode}
            setEditMode={setEditMode}
            dispatch={dispatch}
            titleRef={titleRef}
            descriptionRef={descriptionRef} />
        </Col>
        <Col xs={8} id="page-content-wrapper">
          <ul>
            {state.map((task) => (<TaskView
              key={task.id}
              task={task}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
              editMode={editMode} />
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
