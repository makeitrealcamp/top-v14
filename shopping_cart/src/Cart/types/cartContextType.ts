import { Product } from '../../shared/types/productType';
import { CartState } from './initialState';

export interface CartContextInterface {
  cartState: CartState;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}
