import * as tasksTypes from './tasksTypes';


const initialState = {
  tasks: []
}
/**
 * 
 * @param {object} state 
 * @param {object} action 
 * @returns 
 */
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case tasksTypes.CREATE_TASK:
      const tasks = [action.payload, ...state.tasks]
      return { ...state, tasks }
    case tasksTypes.DELETE_TASK:
      const deletedTasks = state.tasks.filter(task => task.id !== action.payload)
      return { ...state, tasks: deletedTasks }

    case tasksTypes.EDIT_TASK:
      const editedTasks = state.tasks.map(task => {
        return task.id === action.payload.id ? action.payload : task
      })
      return { ...state, tasks: editedTasks }
    default:
      return state
  }
}