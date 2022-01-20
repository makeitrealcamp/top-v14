import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { TaskContext } from '../context/TasksContext'

export const Footer = () => {
  const { task, state, changeText } = useContext(TaskContext)
  return (
    <div>
      <p>This is context value {task}</p>

      <p> This is state ={state}</p>

      <Button onClick={() => changeText('Text from footer')}  > Change Text </Button>
    </div>
  )
}
