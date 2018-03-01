import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import {
  SidebarContainer,
  SidebarContent,
  SidebarButton,
  ButtonTextStyle,
  SidebarUpper,
  SidebarLower
} from '../../styles/sidebarStyles';
import * as sidebarActions from '../../redux/actions/sidebar';
import {
  View
} from 'react-native';
import NewTimer from './newTimer';
import CustomTimer from './customTimer';
import UpdateTimer from './updateTimer';


class Sidebar extends Component {
  render(){
    console.log('UPDATE TIMER? ', this.props.updateTimerToggled)
    return(
      <SidebarContainer>
        {!this.props.newTimerToggled && !this.props.customTimerToggled && !this.props.updateTimerToggled && (
          <SidebarContent>
            <SidebarUpper>
              <SidebarButton
                color='#BCC8E5'
                onPress={() => this.props.toggleNewTimer(true)}
              >
                <ButtonTextStyle>New Tracker</ButtonTextStyle>
              </SidebarButton>
              <SidebarButton
                color='#BCC8E5'
                onPress={() => this.props.toggleCustomTimer(true)}
              >
                <ButtonTextStyle>Custom Tracker</ButtonTextStyle>
              </SidebarButton>
            </SidebarUpper>
            <SidebarLower>
              <Text style={{color: '#BCC8E5'}}>Account</Text>
              <Text style={{color: '#BCC8E5'}}>Settings</Text>
              <Text style={{color: '#BCC8E5'}}>Help</Text>
            </SidebarLower>
          </SidebarContent>
        )}
        {this.props.newTimerToggled && (
          <SidebarContent>
            <NewTimer />
          </SidebarContent>
        ) || this.props.customTimerToggled && (
          <SidebarContent>
            <CustomTimer />
          </SidebarContent>
        ) || this.props.updateTimerToggled && (
          <SidebarContent>
            <UpdateTimer />
          </SidebarContent>
        )}
      </SidebarContainer>
    )
  }
}
function bindActions(dispatch){
    return {
        toggleNewTimer: (newTimerToggled) => dispatch(sidebarActions.toggleNewTimer(newTimerToggled)),
        toggleCustomTimer: (customTimerToggled) => dispatch(sidebarActions.toggleCustomTimer(customTimerToggled)),
    };
}

const mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
  customTimerToggled: state.sidebar.customTimerToggled,
  updateTimerToggled: state.sidebar.updateTimerToggled
});

export default connect(mapStateToProps, bindActions)(Sidebar);
