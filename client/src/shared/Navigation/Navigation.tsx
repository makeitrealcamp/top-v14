import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Logo } from './Logo';
import { MainNavigation } from './MainNavigation';
import { UtilityNavigation } from './UtilityNavigation';

type NavigationProps = {
  isLoggedIn: boolean | undefined;
};

export const Navigation: React.FC<NavigationProps> = ({ isLoggedIn }) => {
  return (
    <Header>
      <Top>
        <Row>
          <Logo />
          <MainNavigation />
          {!isLoggedIn && <UtilityNavigation />}
        </Row>
      </Top>
    </Header>
  );
};

const Top = styled.div`
  background: #fff;
  z-index: 997;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  padding: 0 40px;
  position: relative;
  margin: 0 auto;
  max-width: 1220px;
`;
