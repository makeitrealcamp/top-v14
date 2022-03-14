import React from 'react';
import { useContext } from 'react';
import { Button, Flex, Text } from 'theme-ui';
import { CartContext } from '../context/CartContext';
import { useCartActions } from '../hooks/useCartActionsRedux';

interface Props {
  qty: number;
  id: number;
}

export const CartProductActions: React.FC<Props> = ({ qty, id }) => {
  // const { increaseQty, decreaseQty } = useContext(CartContext);
  const { increaseQty, decreaseQty } = useCartActions();
  return (
    <Flex
      sx={{
        alignItems: 'center',
      }}>
      <Button
        sx={{
          color: 'black',
          ':hover': {
            backgroundColor: '#bbb',
          },
          cursor: 'pointer',
        }}
        disabled={qty <= 1 && true}
        onClick={() => decreaseQty(id)}>
        -
      </Button>
      <Text>{qty}</Text>
      <Button
        sx={{
          color: 'black',
          ':hover': {
            backgroundColor: '#bbb',
          },
          cursor: 'pointer',
        }}
        onClick={() => increaseQty(id)}>
        +
      </Button>
    </Flex>
  );
};
