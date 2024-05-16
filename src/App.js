import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App = () => (
  <AppContainer>
    <GlobalStyles />
    <Sidebar />
    <MainContent>
      <Header />
      <Dashboard />
    </MainContent>
  </AppContainer>
);

export default App;
