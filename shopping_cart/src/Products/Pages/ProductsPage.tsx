import React from 'react';
import { Container } from 'theme-ui';
import { ProductListContainer } from '../components/ProductListContainer';

export const ProductsPage = () => {
  return (
    <Container sx={{
      mt: 80,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <ProductListContainer />
    </Container>
  );
};
