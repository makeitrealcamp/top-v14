import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { GlobalStyles } from './components/shared/GlobalStyles';
import { Navigation } from './components/navigation/Navigation';
import { Registration } from './pages/Registration';
import { LoginForm } from './components/Auth/form/LoginForm';

function App() {
  return (
    <>
      <Login />
      {/* <GlobalStyles />
      <Navigation />
      <Home />
      hello
      <Login />
      <Registration /> */}
    </>
  );
}

export default App;
