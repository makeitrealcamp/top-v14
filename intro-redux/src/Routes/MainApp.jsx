import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../MainPage';

import { ProductsPage } from '../products/pages/ProductsPage';
import { Navigation } from '../shared/Navigation';


export const MainApp = () => {
  return (

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/tasks' element={<MainPage/>} />
        <Route path='/products' element={<ProductsPage/>} />
      </Routes>
    </BrowserRouter>

  );
};
