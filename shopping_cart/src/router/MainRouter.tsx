import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckoutMP } from '../Checkout/pages/CheckoutMP';
import { Feedback } from '../Checkout/pages/Feedback';
import { MainPage } from '../shared/Pages/MainPage';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/checkout' element={<CheckoutMP />} />
      <Route path='/feedback' element={<Feedback />} />
    </Routes>
  </BrowserRouter>
);
