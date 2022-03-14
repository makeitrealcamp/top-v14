import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../shared/Wrapper';
import { NavigationSideBar } from '../components/NavigationSideBar';
import { ProjectsSideBar } from '../components/ProjectsSideBar';

export const Dashboard = () => {
  return (
    <HomeStyled>
      <NavigationSideBar />
      <ProjectsSideBar />
    </HomeStyled>
  );
};
const HomeStyled = styled(Wrapper)`
  display: flex;
`;
