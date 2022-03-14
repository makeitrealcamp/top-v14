import { createContext } from 'react';
import { authContextType } from '../types';

const authContextDefaultValues: authContextType = {
  user: undefined,
  login: async () => undefined,
  logout: () => undefined,
  error: '',
};

export const AuthContext = createContext<authContextType>(
  authContextDefaultValues
);
