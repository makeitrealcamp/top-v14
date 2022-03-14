import { Product } from '../../shared/types/productType';
import {
  AddToCart,
  ADD_TO_CART,
  DecreaseQty,
  DECREASE_QTY,
  IncreaseQty,
  INCREASE_QTY,
  RemoveFromCart,
  REMOVE_FROM_CART,
} from '../types/actions';

export const addProductAction = (product: Product): AddToCart => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeProductAction = (id: number): RemoveFromCart => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
export const increaseQtyAction = (id: number): IncreaseQty => {
  return {
    type: INCREASE_QTY,
    payload: id,
  };
};
export const decreaseQtyAction = (id: number): DecreaseQty => {
  return {
    type: DECREASE_QTY,
    payload: id,
  };
};
