import styled from 'styled-components';
import { Hero } from '../components/hero/Hero';
import { Navigation } from '../components/navigation/Navigation';
import { GlobalStyles } from '../components/shared/GlobalStyles';
import { Wrapper } from '../components/shared/Wrapper';
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
