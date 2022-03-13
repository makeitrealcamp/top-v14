import React, { ReactNode, useState } from 'react';
import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { AuthContext } from './AuthContext';

type Props = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>();
  const [error, setError] = useState();

  const login = async (userCredentials: any) => {
    try {
      const { data } = await axios.post(`http://localhost:4000/login`, {
        ...userCredentials,
      });
      const decoded = jwtDecode<JwtPayload>(data.token);
      console.log(decoded);
      setUser(true);
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.error.message);
      }
    }
  };

  const logout = () => {
    setUser(false);
  };
  const value = {
    user,
    login,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
