import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  MainContainer,
  Header
} from './src/styles/appStyles';

import MainContent from './src/components/MainContent/mainContent';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <MainContainer>
        <Header>
          <Text>
            --EverythingTracker--
          </Text>
        </Header>
        <MainContent />
      </MainContainer>
    );
  }
}
