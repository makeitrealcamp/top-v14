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
    default:
      return state
  }
}