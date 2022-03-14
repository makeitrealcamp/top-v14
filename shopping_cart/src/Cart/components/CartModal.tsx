import React from 'react';
import { PortalModal } from '../../shared/Modal/PortalModal';
import { ShoppingCart } from './ShoppingCart';

export const CartModal: React.FC<{ onClose: ()=> void }> = ({ onClose }) => {

  return (
    <PortalModal onClose={onClose}>
      <ShoppingCart />
    </PortalModal>
  )

};
