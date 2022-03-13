import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ user }: any) => {
  return user ? <Outlet /> : <Navigate to='/' replace />;
};
