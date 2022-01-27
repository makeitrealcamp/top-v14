import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

export const TaskCard = ({ title, description, id, handleDelete, handleEdit }) => {
  return (
    <Card style={{ width: '18rem' }} className='d-flex'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Row>
        <Col sm='6' className='text-center' >
          <Button onClick={() => handleDelete(id)} variant="outline-danger">Delete</Button>
        </Col>
        <Col sm='6' className='text-center' >
          <Button onClick={() => handleEdit(id)} variant="outline-warning">Edit</Button>
        </Col>
      </Row>
    </Card >);
};
