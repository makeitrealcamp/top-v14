import * as cartTypes from './cartTypes';

export const addToCart = (id) => {
  return {
    type: cartTypes.ADD_PRODUCT,
    payload: id
  }
}

export const removeFromCart = (id) => {
  return {
    type: cartTypes.REMOVE_PRODUCT,
    payload: id
  }
}