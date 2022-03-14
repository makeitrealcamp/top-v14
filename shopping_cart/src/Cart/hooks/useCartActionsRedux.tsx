import { useDispatch, useSelector } from 'react-redux';

import {
  CartState,
  initialState as cartInitialState,
  initialState,
} from '../types/initialState';
import { Product } from '../../shared/types/productType';
import {
  addProductAction,
  decreaseQtyAction,
  increaseQtyAction,
  removeProductAction,
} from '../actions/cartActions';
import { RootState } from '../../redux/rootReducer';

interface CartActions {
  cartState: CartState;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export const useCartActions = (): CartActions => {
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const addProduct = (product: Product): void => {
    dispatch(addProductAction(product));
  };
  const removeProduct = (id: number): void => {
    dispatch(removeProductAction(id));
  };
  const increaseQty = (id: number): void => {
    dispatch(increaseQtyAction(id));
  };
  const decreaseQty = (id: number): void => {
    dispatch(decreaseQtyAction(id));
  };

  return {
    cartState,
    addProduct,
    removeProduct,
    increaseQty,
    decreaseQty,
  };
};
