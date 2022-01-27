import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { EditTaskModalForm } from '../components/EditTaskModalForm';
import { TaskFormContainer } from '../components/TaskFormContainer';
import { TasksList } from '../components/TasksList';

export default function TasksPage() {
  return (
    <Container>
      <Row>
        <Col sm='3'>
          <TaskFormContainer />
        </Col>
        <Col><TasksList /></Col>
      </Row>
      <Row>
        <EditTaskModalForm />
      </Row>
    </Container>
  );
}
