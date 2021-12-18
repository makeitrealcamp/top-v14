import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const UserDetails = ({ user }) => {
const location = useLocation()
console.log(location)
  const { email, gender, phone } = user;
  return (
    <div>
      <h2>USER DETAILS</h2>
      <p>{email}</p>
      <p>{gender}</p>
      <p>{phone}</p>
    </div>
  )
}
