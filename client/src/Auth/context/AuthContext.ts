import { createContext } from 'react';
import { ILoginFormValues } from '../types';

type authContextType = {
  user: boolean | undefined;
  login: (userCredentials: ILoginFormValues) => Promise<void>;
  logout: () => void;
  error?: string;
};

const authContextDefaultValues: authContextType = {
  user: undefined,
  login: async () => undefined,
  logout: () => undefined,
  error: '',
};

export const AuthContext = createContext<authContextType>(
  authContextDefaultValues
);
