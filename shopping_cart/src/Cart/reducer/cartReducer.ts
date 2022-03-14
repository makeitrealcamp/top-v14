import { addToCart } from '../services/addToCart';
import { decreaseQty } from '../services/decreaseQty';
import { increaseQty } from '../services/increaseQty';
import { removeFromCart } from '../services/removeFromCart';
import { totalPrice } from '../services/totalPrice';
import { totalProducts } from '../services/totalProducts';
import {
  Actions,
  ADD_TO_CART,
  DECREASE_QTY,
  INCREASE_QTY,
  REMOVE_FROM_CART,
} from '../types/actions';
import { CartState, initialState } from '../types/initialState';

export const cartReducer = (
  state = initialState,
  actions: Actions
): CartState => {
  switch (actions.type) {
    case ADD_TO_CART:
      const newProducts = addToCart(state.products, actions.payload);
      return {
        ...state,
        products: newProducts,
        totalItems: totalProducts(newProducts),
        totalAmount: totalPrice(newProducts),
      };
    case REMOVE_FROM_CART:
      const updatedProduct = removeFromCart(state.products, actions.payload);
      return {
        ...state,
        products: updatedProduct,
        totalItems: totalProducts(updatedProduct),
        totalAmount: totalPrice(updatedProduct),
      };
    case INCREASE_QTY:
      const increasedProductQty = increaseQty(state.products, actions.payload);
      return {
        ...state,
        products: increasedProductQty,
        totalItems: totalProducts(increasedProductQty),
        totalAmount: totalPrice(increasedProductQty),
      };
    case DECREASE_QTY:
      const decreasedProductQty = decreaseQty(state.products, actions.payload);
      return {
        ...state,
        products: decreasedProductQty,
        totalItems: totalProducts(decreasedProductQty),
        totalAmount: totalPrice(decreasedProductQty),
      };
    default:
      return state;
  }
};
