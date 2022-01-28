
import { getAllProducts } from "../../products/services/getAllProducts";

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'


const initialState = { products: [] }

export const initProducts = () => {
  return async (dispatch) => {
    const products = await getAllProducts();
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products
    })
  }
}
/*
dispatch(getAllProducts())
*/

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}