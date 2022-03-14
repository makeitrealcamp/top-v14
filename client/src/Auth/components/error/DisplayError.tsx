import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const DisplayError: React.FC<Props> = ({ children }) => {
  return <ErrorMessage> {children}</ErrorMessage>;
};

const ErrorMessage = styled.p`
  color: #e5195f;
  margin: 1.5rem auto;
`;
