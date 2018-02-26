import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  Button
} from 'react-native';
import styled from 'styled-components';
import * as sidebarActions from '../../redux/actions/sidebar';
import NewTimer from './newTimer';
import CustomTimer from './customTimer';
const SidebarContainer = styled.View`
  flex: 0.3;
  background-color: #F3F9D2;
`;

class Sidebar extends Component {
  render(){
    return(
      <SidebarContainer>
        {!this.props.newTimerToggled && !this.props.customTimerToggled && (
          <SidebarContainer>
            <Button
              onPress={() => this.props.toggleNewTimer(true)}
              title='New Timer'
            />
            <Text>Custom Timer</Text>
            <Text>Account</Text>
            <Text>Settings</Text>
            <Text>Help</Text>
          </SidebarContainer>
        )}
        {this.props.newTimerToggled && (
          <SidebarContainer>
            <NewTimer />
          </SidebarContainer>
        ) || this.props.customTimerToggled && (
          <SidebarContainer>
            <CustomTimer />
          </SidebarContainer>
        )}
      </SidebarContainer>
    )
  }
}
function bindActions(dispatch){
    return {
        toggleNewTimer: (newTimerToggled) => dispatch(sidebarActions.toggleNewTimer(newTimerToggled)),
    };
}

const mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
  customTimerToggled: state.sidebar.customTimerToggled
});

export default connect(mapStateToProps, bindActions)(Sidebar);
