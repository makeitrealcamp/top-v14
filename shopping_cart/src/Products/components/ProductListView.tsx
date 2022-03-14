import React from 'react';
import { Flex } from 'theme-ui';
import { Product } from '../../shared/types/productType';
import { ProductCard } from './ProductCard';

export const ProductListView: React.FC<{ products: Product[] }> = ({
  products,
}) => {
  return (
    <>
      <Flex
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex>
    </>
  );
};
