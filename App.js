import React from 'react';
import { Text } from 'react-native';
import {
  MainContainer,
  Header,
} from './src/styles/appStyles';

import MainContent from './src/components/MainContent/mainContent';

const App = () => (
  <MainContainer>
    <Header>
      <Text style={{ color: '#343A3F' }}>
        --EverythingTracker--
      </Text>
    </Header>
    <MainContent />
  </MainContainer>

);

export default App;
