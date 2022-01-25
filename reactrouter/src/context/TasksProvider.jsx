import React, { useReducer } from 'react';

import { TaskContext } from './TasksContext';

import taskReducer from '../components/tasks/reducers/taskReducer';

// import intialState from '../utils/tasksDb';
import { useLocalStorage } from '../customHooks/useLocalStorage';

export const TasksProvider = ({ children }) => {
  const [initialState] = useLocalStorage('tasks',[])
  const [tasks, dispatch] = useReducer(taskReducer, initialState);


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
