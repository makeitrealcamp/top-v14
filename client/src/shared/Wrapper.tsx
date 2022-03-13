import styled from 'styled-components';
import { centerLayout } from './GlobalStyles';

export const Wrapper = ({ children, ...props }: any) => (
  <WrapperStyled {...props}>{children}</WrapperStyled>
);

const WrapperStyled = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 2.5rem;
  overflow-y: hidden;
  ${(props: any) => (props.center ? centerLayout.define() : '')}
  background-color: ${(props: any) =>
    props.backgroundColor ? props.backgroundColor : `unset;`}
`;
