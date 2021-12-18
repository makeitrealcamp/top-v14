import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

export const UserDetails = () => {
  const { state } = useLocation();

  const { name, gender, phone } = state;

  return (
    <div>
      <h2>USER DETAILS</h2>
      <p>{name.first} {name.last}</p>
      <p>{gender}</p>
      <p>{phone}</p>
    </div>
  )
}
