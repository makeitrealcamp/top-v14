import { createContext, useState } from "react";

export const AuthContext = createContext();


// DEMO DATA
const user = { email: 'test@email.com', pass: '123' }

export const AuthContextProvider = ({ children }) => {

  const [auth, setAuth] = useState(false)

  const login = (userData) => {
    // call API
    console.log(userData)
    const { email, password } = userData;

    if (email === user.email && password === user.pass) {
      setAuth(true)
    }
    
    
  }
  const logout = () => {
    setAuth(false)
  }
  
  console.log(auth)
  const value = {
    auth,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}