import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRouteA = ({ children, user }) => {
  return (
    user ? children : <Navigate to='/' />
  )
}
