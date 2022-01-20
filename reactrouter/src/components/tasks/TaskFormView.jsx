import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const TaskFormView = ({ 
  handleSubmit,
  titleRef,
  descriptionRef,
  editMode 
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Title" name='title' ref={titleRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} ref={descriptionRef} placeholder="This tasks is..." />
      </Form.Group>
      <Button type='submit' >{editMode ? 'Edit Task' : 'Create task'}</Button>
    </Form>
  )
}
