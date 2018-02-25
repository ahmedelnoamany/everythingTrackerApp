import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import styled from 'styled-components';

import Sidebar from '../Sidebar/sidebar';

const MainContent = styled.View`
  flex: 0.9;
  width: 100%;
  flex-direction: row;
`

const Content = styled.View`
`;

export default class MainContainer extends Component {
  render() {
    return (
      <MainContent>
        <Sidebar />
        <MainContent>

        </MainContent>
      </MainContent>
    )
  }
}
