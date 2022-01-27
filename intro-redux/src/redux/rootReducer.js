import { combineReducers } from "redux";
import { counterReducer } from "./initialExample/counterReducer";
import { tasksReducer } from "./tasks/tasksReducer";


export const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer
})