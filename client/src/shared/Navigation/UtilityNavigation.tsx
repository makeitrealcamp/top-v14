import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UtilityNavigation = () => {
  return (
    <Nav>
      <ul>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
        <li>
          <Link className='nav-link' to='/signup'>
            <LoginButton>SignUp</LoginButton>
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: inline-block;
  margin-left: auto;
  ul {
    font-family: 'Soleil', Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 21px;
  }
  li {
    font-family: 'Soleil', Helvetica, Arial, sans-serif;
    font-size: 14px;
    display: inline-block;
    margin: 0 5px;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
  }
  a {
    color: #000;
    font-size: 16px;
    text-decoration: none;
    transition: 0.1s color ease-in-out;
  }
`;

const LoginButton = styled.button`
  font-family: 'Soleil_Bold', Helvetica, Arial, sans-serif;
  display: inline-block;
  height: 40px;
  min-width: 120px;
  font-size: 14px;
  line-height: 37px;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: #00a82d;
  border-radius: 3px;
  border: 2px solid #00a82d;
  padding: 0 10px;
  cursor: pointer;
  :hover& {
    color: #ffffff;
    background: #c6c4c4;
    border: 2px solid #028e27;
    transition: 0.1s background ease-in-out;
  }
`;
