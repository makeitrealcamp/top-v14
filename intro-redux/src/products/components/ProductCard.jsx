import React from 'react';
import { Button, Card } from 'react-bootstrap';

export const ProductCard = ({ id, title, description, image, price, handleAddToCart }) => {
  return (
    <Card style={{ width: '20rem', marginRight: '1.5rem', marginTop: '1.5rem' }}  >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button onClick={() => handleAddToCart(id)} variant="primary">add to cart</Button>
      </Card.Body>
      <Card.Footer>
        {price}
      </Card.Footer>
    </Card>
  );
};
