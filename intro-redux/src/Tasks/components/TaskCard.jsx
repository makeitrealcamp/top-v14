import React from 'react';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Button, Card, } from 'react-bootstrap';

export const TaskCard = ({ title, description, id, handleDelete, handleEdit, handleDone }) => {
  return (
    <Card style={{ width: '18rem' }} className='mt-2'>
      <Card.Header className='d-flex justify-content-end'>
        <FaPencilAlt
          onClick={() => handleEdit(id)}
          color='blue'
          style={{ cursor: 'pointer' }}
          className='mx-2 '
        />
        <FaTrashAlt
          onClick={() => handleDelete(id)}
          color='red'
          style={{ cursor: 'pointer' }}
          className='mx-2'
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex flex-row-reverse' >
        <Button variant='outline-success' size="sm" onClick={() => handleDone(id)} >Mark as done</Button>
      </Card.Footer>
    </Card >
  );
};
