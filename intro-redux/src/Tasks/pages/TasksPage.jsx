
import { Col, Container, Row } from 'react-bootstrap';

import { TaskFormContainer } from '../components/TaskFormContainer';
import { TasksListsContainer } from '../components/TasksListsContainer';


export default function TasksPage() {

  return (
    <Container>
      <Row>
        <Col sm='3'>
          <TaskFormContainer />
        </Col>
        <Col> <TasksListsContainer /></Col>
      </Row>
      <Row>
      </Row>
    </Container>
  );
}
