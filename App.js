import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components';

import MainContent from './src/components/MainContent/mainContent';

type Props = {};

export const MainContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #1B9AAA;
`;

export const Header = styled.View`
  flex: 0.1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #F3F9D2;
`;


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92B4A7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#2F2F2F'
  },
  instructions: {
    textAlign: 'center',
    color: '#2F2F2F',
    marginBottom: 5,
  },
});
