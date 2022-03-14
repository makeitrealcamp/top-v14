import React from 'react';
import { Box, Heading, Text } from 'theme-ui';
import { Product } from '../../shared/types/productType';
import { CartProduct } from './CartProduct';

export const CartProductsList: React.FC<{ totalItems: number, products: Product[] }> = ({ totalItems, products }) => {
  return (
    <Box sx={{
      overflow: 'auto',
      border: '2px solid green',
    }}>
      {
        totalItems > 0 ? (

          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  <Text variant='caps' >description</Text>
                </th>
                <th>
                  <Text>price</Text>
                </th>
                <th>
                  <Text>qty</Text>
                </th>
                <th>
                  <Text>total</Text>
                </th>
              </tr>

            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <CartProduct product={product} />
                </tr>)

              )}
            </tbody>
          </table>
        ) :
          <Box>
            <Heading as={'h4'} >
              Empty Cart
            </Heading>
          </Box>
      }
    </Box>
  );
};
