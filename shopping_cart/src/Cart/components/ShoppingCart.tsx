import React from 'react';
import { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Flex, Heading, Text } from 'theme-ui';
import { CartContext } from '../context/CartContext';
import { useCartActions } from '../hooks/useCartActionsRedux';
import { CartState } from '../types/initialState';
import { CartProductsList } from './CartProductsList';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../../shared/types/productType';
import { productDTO } from '../../Checkout/utils/productDTO';

export const ShoppingCart = () => {
  // const { cartState: { products, totalAmount, totalItems } } = useContext(CartContext);
  const { cartState } = useCartActions();

  const navigate = useNavigate();
  const { totalItems, products, totalAmount } = cartState;

  // const goToCheckout = () => navigate('/checkout');
  const handleCheckout = async (products: Product[]) => {
    const items = productDTO(products);

    try {
      const { data } = await axios.post('http://localhost:4000/checkout', {
        items,
      });
      console.log(data);
      // navigate(data.urlRedirect, { replace: true });
      window.location.href = data.urlRedirect;
    } catch (error) {
      console.log(error);
    }
  };

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
          onClick={() => handleCheckout(products)}
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
