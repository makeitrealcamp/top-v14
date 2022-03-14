import React from 'react';
import { Spinner } from 'theme-ui';

import { useGetAllProducts } from '../hooks/useGetAllProducts';
import { ProductListView } from './ProductListView';

export const ProductListContainer = () => {

  const { products, loading, error } = useGetAllProducts()

  if (loading) return <Spinner />
  if (error) return <h2>Ups! Something went wrong!</h2>

  return (<ProductListView products={products} />);
};
