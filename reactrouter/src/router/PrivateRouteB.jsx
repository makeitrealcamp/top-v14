import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRouteB = ({ user }) => {
  return (
    user ? <Outlet /> : <Navigate to='/' replace />
  )
}
