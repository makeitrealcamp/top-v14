import React from 'react';
import styled from 'styled-components';

export const MainNavigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href='/why-evernote' data-ga-navigation-location='header'>
            Why Evernote
          </a>
        </li>
        <li>
          <a href='/compare-plans' data-ga-navigation-location='header'>
            Plans
          </a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: inline-block;
  vertical-align: top;
  margin-top: 24px;
  margin-left: 50px;
  ul {
    line-height: 31px;
  }
  li {
    display: inline-block;
    margin-left: 28px;
    padding-bottom: 24px;
    position: relative;
  }
  li > a {
    font-family: 'Soleil_Bold', Helvetica, Arial, sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;
