import React from 'react';
import styled from 'styled-components';
import { FaEvernote } from 'react-icons/fa';
export const Logo = () => {
  return (
    <LogoLink>
      <LogoText>My notes App</LogoText>
      <LogoImage>
        <FaEvernote color='red' />
      </LogoImage>
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: block;
  width: 177px;
  height: 40px;
  text-indent: -9999px;
  background-size: contain;
  color: #000;
  font-size: 16px;
  text-decoration: none;
  transition: 0.1s color ease-in-out;
`;
const LogoText = styled.span`
  position: absolute;
  right: 9999px;
`;
const LogoImage = styled.span`
  display: block;
  width: 50%;
  height: 50%;
`;
