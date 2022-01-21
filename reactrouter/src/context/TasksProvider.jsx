import React, { useReducer } from 'react';

import { TaskContext } from './TasksContext';

import taskReducer from '../components/tasks/reducers/taskReducer';

import intialState from '../utils/tasksDb';

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, intialState)


  const value = {
    dispatch,
    tasks
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}
