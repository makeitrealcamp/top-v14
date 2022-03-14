import React, { useContext } from 'react';
import { Close } from 'theme-ui';
import { CartContext } from '../context/CartContext';
import { useCartActions } from '../hooks/useCartActionsRedux';

export const RemoveCartItem: React.FC<{ id: number }> = ({
  id,
}): JSX.Element => {
  // const { removeProduct } = useContext(CartContext);
  const { removeProduct } = useCartActions();

  return (
    <Close
      sx={{
        cursor: 'pointer',
        ':hover': {
          color: 'red',
        },
      }}
      onClick={() => removeProduct(id)}
    />
  );
};
