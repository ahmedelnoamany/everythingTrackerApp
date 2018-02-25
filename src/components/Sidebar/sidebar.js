import React, { Component } from 'react';
import {
  Text,
  Button
} from 'react-native';
import styled from 'styled-components';

import NewTimer from './newTimer';
import CustomTimer from './customTimer';
const SidebarContainer = styled.View`
  flex: 0.3;
  background-color: #F3F9D2;
`;

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTimerToggled: false,
      customTimerToggled: false,

    };
  }
  render(){
    return(
      <SidebarContainer>
        {!this.state.newTimerToggled && !this.state.customTimerToggled && (
          <SidebarContainer>
            <Button
              onPress={() => this.setState({newTimerToggled: true})}
              title='New Timer'
            />
            <Text>Custom Timer</Text>
            <Text>Account</Text>
            <Text>Settings</Text>
            <Text>Help</Text>
          </SidebarContainer>
        )}
        {this.state.newTimerToggled && (
          <SidebarContainer>
            <NewTimer />
          </SidebarContainer>
        ) || this.state.customTimerToggled && (
          <SidebarContainer>
            <CustomTimer />
          </SidebarContainer>
        )}
      </SidebarContainer>
    )
  }
}
