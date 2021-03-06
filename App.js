import React from 'react';
import { Text } from 'react-native';
import {
  MainContainer,
  Header,
} from './src/styles/appStyles';

import MainContent from './src/components/MainContent/mainContent';

const App = () => (
  <MainContainer>
    <MainContent />
  </MainContainer>

);

export default App;
