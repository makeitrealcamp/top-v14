import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthContext } from '../Auth/context/AuthContext';
import { Login } from '../Auth/pages/Login';
import { SignUp } from '../Auth/pages/SignUp';
import { Dashboard } from '../Dashboard/pages/Dashboard';
import Home from '../pages/Home';
import { Navigation } from '../shared/Navigation/Navigation';
import { NotFound } from '../shared/notFound/NotFound';
import { PrivateRoute } from './PrivateRoute';

export const MainRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      {<Navigation isLoggedIn={user} />}
      <Routes>
        <Route path='/' element={<Home />} />

        {/* <Route path='about' element={<About />} /> */}

        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />

        <Route element={<PrivateRoute user={user} />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};
