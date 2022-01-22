import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { TaskContext } from '../context/TasksContext'

export const Footer = () => {
  const { task, state, changeText } = useContext(TaskContext)
  return (
    <div>
      Footer

    </div>
  )
}
