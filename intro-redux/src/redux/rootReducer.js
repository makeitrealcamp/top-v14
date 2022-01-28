import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { counterReducer } from "./initialExample/counterReducer";
import { productsReducer } from "./products/productsReducer";
import { tasksReducer } from "./tasks/tasksReducer";


export const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
  cart: cartReducer,
  products: productsReducer
})