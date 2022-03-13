import { createContext } from 'react';

type authContextType = {
  user: boolean | undefined;
  login: ((userCredentials: any) => Promise<void>) | undefined;
  logout: () => void;
  error?: string;
};

const authContextDefaultValues: authContextType = {
  user: undefined,
  login: undefined,
  logout: () => null,
  error: '',
};

export const AuthContext = createContext<authContextType>(
  authContextDefaultValues
);
