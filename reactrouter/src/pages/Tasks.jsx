import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TaskInput } from '../components/forms/TaskInput'




export const Tasks = () => {
  return (
    <Container fluid>
    <Row>
      <Col xs={4} id="sidebar-wrapper">
      <TaskInput/>
      </Col>
      <Col xs={8} id="page-content-wrapper">
        Move tasks here
      </Col>
    </Row>

  </Container>
  )
}
