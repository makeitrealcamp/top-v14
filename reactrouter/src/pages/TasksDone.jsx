import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TasksContext'

export const TasksDone = () => {
  const context = useContext(TaskContext);
  return (
    <div>
      I'm done {context.task}
    </div>
  )
}
