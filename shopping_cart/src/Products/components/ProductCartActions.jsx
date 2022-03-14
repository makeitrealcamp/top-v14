import React, { useContext } from 'react';
import { Button } from 'theme-ui';

import { CartContext } from '../../Cart/context/CartContext';
import { useCartActions } from '../../Cart/hooks/useCartActionsRedux';


export const ProductCartActions = ({ id, product }) => {
  // const { addProduct, removeProduct, cartState } = useContext(CartContext)
  const { addProduct, removeProduct, cartState } = useCartActions();

  const exists = cartState.products.some((product) => product.id === id)
  return (<>
    {
      exists ?
        <Button
          sx={{
            backgroundColor: '#ccc',
            color: 'red',
            cursor: 'pointer',
            ':hover': { backgroundColor: '#bbb', }
          }}
          onClick={() => removeProduct(id)} > remove </Button> :
        <Button
          sx={{
            backgroundColor: '#ccc',
            color: 'green',
            cursor: 'pointer',
            ':hover': { backgroundColor: '#bbb', }
          }}
          onClick={() => addProduct(product)} > add to cart </Button>
    }
  </>

  )
};
