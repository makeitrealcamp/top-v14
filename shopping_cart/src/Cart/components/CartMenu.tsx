import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartContext } from '../context/CartContext';
import { useCartActions } from '../hooks/useCartActionsRedux';

import { CartMenuView } from './CartMenuView';
import { CartModal } from './CartModal';

export const CartMenu = () => {
  // const { cartState } = useContext(CartContext);
  const { cartState } = useCartActions();

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  return (
    <>
      <CartMenuView totalItems={cartState.totalItems} showCart={openModal} />
      {showModal && <CartModal onClose={closeModal} />}
    </>
  );
};
