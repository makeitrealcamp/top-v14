import React from 'react'

export const UserDetails = ({ user }) => {

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
