import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductList } from '../components/ProductList';

export const ProductsPage = () => {
  return (
    <Container>
      <Row>
        <Col style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};
