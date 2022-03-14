import React from 'react';
import { MainPage } from './shared/Pages/MainPage';
import { CartContextProvider } from './Cart/context/CartContext'; // using context
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const App = () => {
  return (
    // <CartContextProvider>
    <Provider store={store}>
      <MainPage />
    </Provider>
    // </CartContextProvider>
  );
};
