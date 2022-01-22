import { Button, Container, Nav, Navbar } from "react-bootstrap";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const Navigation = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext)
  const hanleLogout = () => {
    logout();
    navigate('/')
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to='/'>Home </Link>
            <Link className="nav-link" to='/about'>About </Link>
            <Link className="nav-link" to='/users'>Users </Link>
            <Link className="nav-link" to='/posts'>Posts </Link>

            {
              isLoggedIn ? (

                <>
                  <Link className="nav-link" to='/tasks'>Tasks </Link>
                  <Link className="nav-link" to='/done'>Done </Link>
                  <Link className="nav-link" to='/private'>Private </Link>
                  <Link className="nav-link" to='/privateB'>Private-B </Link>
                  <Button variant="danger" onClick={hanleLogout}>Logout </Button>
                </>
              ) : <Link className="nav-link" to='/login'>Login </Link>
            }
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}
