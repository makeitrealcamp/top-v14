import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          My App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className='nav-link' to='/' >Home</Link>
          <Link className='nav-link' to='/tasks' >Tasks</Link>
          <Link className='nav-link' to='/products' >Products</Link>
        </Nav>
      </Container>
    </Navbar >
  );
};
