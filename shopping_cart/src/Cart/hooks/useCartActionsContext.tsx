import { useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';
import {
  ADD_TO_CART,
  DECREASE_QTY,
  INCREASE_QTY,
  REMOVE_FROM_CART,
} from '../types/actions';
import { CartState } from '../types/initialState';
import { Product } from '../../shared/types/productType';

interface CartActions {
  cartState: CartState;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export const useCartActions = (initialState: CartState): CartActions => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product: Product): void => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
  const removeProduct = (id: number): void => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };
  const increaseQty = (id: number): void => {
    dispatch({
      type: INCREASE_QTY,
      payload: id,
    });
  };
  const decreaseQty = (id: number): void => {
    dispatch({
      type: DECREASE_QTY,
      payload: id,
    });
  };

  return {
    cartState,
    addProduct,
    removeProduct,
    increaseQty,
    decreaseQty,
  };
};
