import React from 'react';
import styled from 'styled-components';
interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  type,
  children,
  disabled,
  onClick,
}) => (
  <ButtonComponent onClick={onClick} type={type} disabled={disabled}>
    {children}
  </ButtonComponent>
);

const ButtonComponent = styled.button`
  color: red;
  margin-top: 0.5rem;
`;
