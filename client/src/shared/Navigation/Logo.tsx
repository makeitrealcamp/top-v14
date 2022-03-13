import React from 'react';
import styled from 'styled-components';
import { FaEvernote } from 'react-icons/fa';
export const Logo = () => {
  return (
    <>
      <LogoLink>
        <LogoText>My notes App</LogoText>
        <LogoImage>
          <FaEvernote color='red' />
        </LogoImage>
      </LogoLink>
    </>
  );
};

const LogoLink = styled.a`
  display: block;
  width: 3rem;
  height: 40px;

  background-size: contain;
  color: #000;
  font-size: 16px;
  text-decoration: none;
  transition: 0.1s color ease-in-out;
`;
const LogoText = styled.span`
  position: absolute;
  margin-right: 2rem;
`;
const LogoImage = styled.span`
  /* display: block; */
  width: 150%;
  height: 50%;
`;
