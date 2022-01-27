import React from 'react';
import { Button, Form } from 'react-bootstrap';

export const TaskFormView = ({ handleDescription, handleTitle, handleSubmit, title, description }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' >
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          name='title'
          placeholder='Task Title'
          onChange={handleTitle}
          value={title}
        />
      </Form.Group>
      <Form.Group className='mb-3' >
        <Form.Label>Description</Form.Label>
        <Form.Control
          onChange={handleDescription}
          name='description'
          as='textarea'
          rows={3}
          value={description}
        />
      </Form.Group>
      <Button type='submit' >Save task</Button>
    </Form>
  )
};
