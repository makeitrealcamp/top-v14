import React from 'react';
import styled from 'styled-components';
interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<Props> = ({
  type,
  children,
  disabled,
  onClick,
  variant,
}) => (
  <ButtonComponent
    onClick={onClick}
    type={type}
    disabled={disabled}
    variant={variant}
  >
    {children}
  </ButtonComponent>
);

export const ButtonComponent = styled.button<{
  variant?: 'primary' | 'secondary';
}>`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: ${(props) =>
    props.variant === 'secondary'
      ? ' #e5195f'
      : props.theme.palette.primary.primaryColor};
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    background-color: ${(props) =>
      props.variant === 'secondary'
        ? ' #e5195f'
        : props.theme.palette.primary.primaryColorDark};
  }
`;
