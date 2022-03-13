import styled from 'styled-components';

import { Hero } from '../components/hero/Hero';
import { Wrapper } from '../shared/Wrapper';

export default function Home() {
  return (
    <HomeStyled>
      <Hero />
    </HomeStyled>
  );
}

const HomeStyled = styled(Wrapper)`
  display: flex;
`;
