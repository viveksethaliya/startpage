import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import NewsTile from './components/NewsTile';
import GRT from './components/GRT';
import BTR from './components/BTR';
import Devl from './components/DEV';
import GAM from './components/GAM';
import SRC from './components/SRC';

import ShortcutTile from './components/ShortcutTile';
import DateTimeTile from './components/DateTimeTile';
import Social from './components/Social';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 38vw 40vw;
  margin: 0 auto;
  margin-left: 5px;
  gap: 10px;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 11vw 11vw 11vw 11vw;
  grid-template-rows: 15vh 30vh;

  gap: 10px;
`;
const PC = styled.div`
  display: grid;
  height: 90vh;

  margin: 20px;
  gap: 10px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <PC>
        <Container>
          <NewsTile />
          <MainContent>
            <GRT />
            <BTR />
            <DateTimeTile />
            <Social />
            <Devl />
            <ShortcutTile />
            <GAM />
            <SRC />
          </MainContent>
        </Container>
      </PC>
    </>
  );
};

export default App;