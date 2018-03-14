import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SidebarContainer,
  SidebarContent,
  SidebarUpper,
  SidebarLower,
  SidebarStyles,
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
            <View style={{ margin: '5%' }}>
              <Icon.Button
                name='timer'
                onPress={() => props.toggleNewTimer(true)}
                style={SidebarStyles.SidebarButton}
              >
                <Text style={SidebarStyles.SidebarButtonText}>
              New Tracker
                </Text>
              </Icon.Button>
            </View>
            <View style={{ margin: '5%' }}>
              <Icon.Button
                name='av-timer'
                onPress={() => props.toggleCustomTimer(true)}
                style={SidebarStyles.SidebarButton}
              >
                <Text style={SidebarStyles.SidebarButtonText} >
              Custom Tracker
                </Text>
              </Icon.Button>
            </View>
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
Sidebar.defaultProps = {
  updateTimerToggled: false,
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
