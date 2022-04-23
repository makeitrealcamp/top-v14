import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useState } from 'react'
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const validUser = await signInWithEmailAndPassword(auth, email, password);
      setUser(validUser.user.email);
    } catch (error) {
      setError(error.message);
    }
  };

  const logout = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}