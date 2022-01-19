import { Container, Nav, Navbar } from "react-bootstrap";
import React from 'react'
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link  className="nav-link" to='/'>Home </Link>
            <Link  className="nav-link" to='/about'>About </Link>
            <Link  className="nav-link" to='/users'>Users </Link>
            <Link  className="nav-link" to='/posts'>Posts </Link>
            <Link  className="nav-link" to='/tasks'>Tasks </Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}
