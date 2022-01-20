import React from 'react'
import { useState } from 'react'
import { TaskContext } from './TasksContext'

export const TasksProvider = ({ children }) => {
  const [state, setState] = useState('')

  const changeText = (text) => setState(text)

  return (
    <TaskContext.Provider value={{ task: ' This is value from custom provider', state, changeText }}>
      {children}
    </TaskContext.Provider>
  )
}
