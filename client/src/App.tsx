import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { GlobalStyles } from './components/shared/GlobalStyles';
import { Navigation } from './components/navigation/Navigation';
import { Registration } from './pages/Registration';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Home />
      hello
      <Login />
      <Registration />
    </>
  );
}

export default App;
