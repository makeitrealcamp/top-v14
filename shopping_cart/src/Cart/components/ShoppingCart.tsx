import React from 'react';
import { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Flex, Heading, Text } from 'theme-ui';
import { CartContext } from '../context/CartContext';
import { useCartActions } from '../hooks/useCartActionsRedux';
import { CartState } from '../types/initialState';
import { CartProductsList } from './CartProductsList';

export const ShoppingCart = () => {
  // const { cartState: { products, totalAmount, totalItems } } = useContext(CartContext);
  const { cartState } = useCartActions();
  // const { totalItems, products } = useSelector((state: CartState) => state);
  console.log('products');
  console.log(cartState.products);
  const { totalItems, products, totalAmount } = cartState;

  return (
    <Container
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        border: '2px solid red',
        overflow: 'hidden',
      }}>
      <Heading as={'h2'}>My products</Heading>
      <CartProductsList totalItems={totalItems} products={products} />
      <Flex
        sx={{
          alignItems: 'center',
        }}>
        <Text>{totalAmount}</Text>
      </Flex>
      <Flex
        sx={{
          padding: '0 1rem',
          flexDirection: 'row-reverse',
        }}>
        <Button
          sx={{
            cursor: 'pointer',
            color: 'green',
            border: '1px solid gray',
            ':hover': {
              backgroundColor: '#bbb',
            },
          }}>
          go to checkout
        </Button>
      </Flex>
    </Container>
  );
};
