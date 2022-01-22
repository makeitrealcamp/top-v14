import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

import { LoginFormView } from './LoginFormView'

export const LoginForm = () => {
  const navigate = useNavigate()
  const { auth, login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    // setEmail()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
    login({ email, password })
  }


  useEffect(() => {
    if (auth) {
      navigate('/private')
    }
  }, [auth])


  return (
    <LoginFormView
      setEmail={handleEmail}
      setPassword={handlePassword}
      handleSubmit={handleSubmit}
      email={email}
      password={password}
    />
  )
}
