import React, { ReactNode, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { AuthContext } from './AuthContext';
import { ILoginFormValues, UserIDJwtPayload } from '../types';

type Props = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<string>();
  const [error, setError] = useState();

  const login = async (userCredentials: ILoginFormValues) => {
    try {
      const { data } = await axios.post(`http://localhost:4000/login`, {
        ...userCredentials,
      });
      console.log(data);
      const decoded = jwtDecode<UserIDJwtPayload>(data.token.authToken);
      console.log(decoded);
      setUser(decoded.id);
    } catch (error: any) {
      console.log(error.response);
      if (error.response && error.response.status === 401) {
        setError(error.response.data.message);
      }
    }
  };

  const logout = () => {
    setUser(undefined);
  };
  const value = {
    user,
    login,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
