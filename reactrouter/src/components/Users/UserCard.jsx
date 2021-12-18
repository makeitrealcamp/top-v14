import React from 'react'
import { Button, Card } from 'react-bootstrap'


export const UserCard = ({ user, handleDetails }) => {

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
        <Button onClick={() => handleDetails(user.login.uuid, user)} variant='danger' > Details </Button>
      </Card.Body>
    </Card>
  )
}
