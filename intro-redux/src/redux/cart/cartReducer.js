import * as cartTypes from './cartTypes';

const initialState = {
  cart: {
    products: [],
    qty: 0,
    price: 0
  }
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT:
      console.log('add to cart');
      // VALIDAR QUE EL producto no exista
      const newCart = [...state.cart.products, action.payload]
      return { ...state, cart: newCart }
    case cartTypes.REMOVE_PRODUCT:
      console.log('remove from cart');
      return state
    default:
      return state
  }
}