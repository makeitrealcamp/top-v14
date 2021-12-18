import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import { UserDetails } from './UserDetailsA';

export const UserCard = ({ user }) => {

  const { location, name, picture } = user;

  const { first } = user.name
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${picture.medium}`} />
      <Card.Body>
        <Card.Title>{first}</Card.Title>
        <Card.Text>
          {location.city} {location.country}
        </Card.Text>
        <Routes>
          <Route path={`${user.login.uuid}`} element={<UserDetails user={user} />} />
        </Routes>
        <Link className='btn btn-primary' to={`${user.login.uuid}`} >Details</Link>
      </Card.Body>
    </Card>
  )
}
