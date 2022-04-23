import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { PrivateRoutes } from '../Routes/PrivateRoutes';
import { PublicRoutes } from '../Routes/PublicRoutes';
import { useAuth } from '../hooks/useAuth';

export const MainRouter = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}
