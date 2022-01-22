import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LoginForm } from '../login/LoginForm'

export const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col md="auto">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  )
}
