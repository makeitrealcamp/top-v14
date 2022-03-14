import React, { ReactNode } from 'react';
import { createContext } from 'react';
import { initialState } from '../types/initialState';
import { useCartActions } from '../hooks/useCartActionsContext';
import { CartContextInterface } from '../types/cartContextType';

export const CartContext = createContext<CartContextInterface>(
  {} as ReturnType<typeof useCartActions>
);

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { cartState, addProduct, removeProduct, increaseQty, decreaseQty } =
    useCartActions(initialState);

  const value = {
    cartState,
    addProduct,
    removeProduct,
    increaseQty,
    decreaseQty,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
