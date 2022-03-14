import { Product } from '../../shared/types/productType';

export interface CartState {
  products: Product[];
  totalAmount: number;
  totalItems: number;
}

export const initialState: CartState = {
  products: [],
  totalAmount: 0,
  totalItems: 0,
};
