import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  Button
} from 'react-native';
import {
  SidebarContainer,
  SidebarContent
} from '../../styles/sidebarStyles';
import * as sidebarActions from '../../redux/actions/sidebar';

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
            <Button
              color='#BCC8E5'
              onPress={() => this.props.toggleNewTimer(true)}
              title='New Timer'
            />
            <Button
              color='#BCC8E5'
              onPress={() => this.props.toggleCustomTimer(true)}
              title='Custom Timer'
            />
            <Text style={{color: '#BCC8E5'}}>Account</Text>
            <Text style={{color: '#BCC8E5'}}>Settings</Text>
            <Text style={{color: '#BCC8E5'}}>Help</Text>
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
