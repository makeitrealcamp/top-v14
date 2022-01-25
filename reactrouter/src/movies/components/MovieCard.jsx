import React from 'react';
import { Button, Card } from 'react-bootstrap';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

export const MovieCard = ({ title, overview, image, id, handleFavorites }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={IMG_PATH + image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {overview}
      </Card.Text>
      <Button onClick={() => handleFavorites({ title, overview, image, id, handleFavorites })} variant="primary">favorites</Button>
    </Card.Body>
  </Card>
)