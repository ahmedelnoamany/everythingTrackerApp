import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {
  SidebarContainer,
  SidebarContent,
  SidebarButton,
  ButtonTextStyle,
  SidebarUpper,
  SidebarLower,
} from '../../styles/sidebarStyles';
import * as sidebarActions from '../../redux/actions/sidebar';
import NewTimer from './newTimer';
import CustomTimer from './customTimer';
import UpdateTimer from './updateTimer';


const Sidebar = props => (
  <SidebarContainer>
    {
      !props.newTimerToggled
      && !props.customTimerToggled
      && !props.updateTimerToggled
      && (
        <SidebarContent>
          <SidebarUpper>
            <SidebarButton
              color='#BCC8E5'
              onPress={() => props.toggleNewTimer(true)}
            >
              <ButtonTextStyle>New Tracker</ButtonTextStyle>
            </SidebarButton>
            <SidebarButton
              color='#BCC8E5'
              onPress={() => props.toggleCustomTimer(true)}
            >
              <ButtonTextStyle>Custom Tracker</ButtonTextStyle>
            </SidebarButton>
          </SidebarUpper>
          <SidebarLower>
            <Text style={{ color: '#BCC8E5' }}>Account</Text>
            <Text style={{ color: '#BCC8E5' }}>Settings</Text>
            <Text style={{ color: '#BCC8E5' }}>Help</Text>
          </SidebarLower>
        </SidebarContent>
      )}
    {
      (props.newTimerToggled && (
        <SidebarContent>
          <NewTimer />
        </SidebarContent>
      )) || (props.customTimerToggled && (
        <SidebarContent>
          <CustomTimer />
        </SidebarContent>
      )) || (props.updateTimerToggled && (
        <SidebarContent>
          <UpdateTimer />
        </SidebarContent>
      ))
    }
  </SidebarContainer>
);
Sidebar.propTypes = {
  newTimerToggled: PropTypes.bool.isRequired,
  customTimerToggled: PropTypes.bool.isRequired,
  updateTimerToggled: PropTypes.bool,
  toggleNewTimer: PropTypes.func.isRequired,
  toggleCustomTimer: PropTypes.func.isRequired,
};
function bindActions(dispatch) {
  return {
    toggleNewTimer: newTimerToggled =>
      dispatch(sidebarActions.toggleNewTimer(newTimerToggled)),
    toggleCustomTimer: customTimerToggled =>
      dispatch(sidebarActions.toggleCustomTimer(customTimerToggled)),
  };
}

const mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
  customTimerToggled: state.sidebar.customTimerToggled,
  updateTimerToggled: state.sidebar.updateTimerToggled,
});

export default connect(mapStateToProps, bindActions)(Sidebar);
