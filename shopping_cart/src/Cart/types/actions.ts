import { Product } from '../../shared/types/productType';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QTY = 'INCREASE_QTY';
export const DECREASE_QTY = 'DECREASE_QTY';

export type AddToCart = { type: typeof ADD_TO_CART; payload: Product };
export type RemoveFromCart = { type: typeof REMOVE_FROM_CART; payload: number };
export type IncreaseQty = { type: typeof INCREASE_QTY; payload: number };
export type DecreaseQty = { type: typeof DECREASE_QTY; payload: number };
export type Default = { type: 'default' };

export type Actions =
  | AddToCart
  | RemoveFromCart
  | IncreaseQty
  | DecreaseQty
  | Default;
