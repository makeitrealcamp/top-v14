import React from 'react';
import { ProductsPage } from '../../Products/Pages/ProductsPage';
import { Navigation } from '../Navigation/Components/Navigation';

export const MainPage = () => {
  return (<>
    <Navigation />
    <ProductsPage />
  </>
  )
};
