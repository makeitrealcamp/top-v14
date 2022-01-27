import * as tasksTypes from './tasksTypes';

export const createTask = (task) => {
  return {
    type: tasksTypes.CREATE_TASK,
    payload: task
  }
};
export const deleteTask = (id) => {
  return {
    type: tasksTypes.DELETE_TASK,
    payload: id
  }
};