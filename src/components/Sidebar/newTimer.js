import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';
import * as sidebarActions from '../../redux/actions/sidebar';
import { addNewTimer } from '../../redux/actions/timers';
import {
  SidebarContent,
  SidebarUpper,
  SidebarStyles,
} from '../../styles/sidebarStyles';

class NewTimer extends Component {
  addNewTimer(name, type, stepSize, dailyGoal) {
    const newTimerObject = {
      id: 0,
      name,
      type,
      increment: stepSize,
      value: 0,
      dailyGoal,
    };
    this.props.addNewTimer(newTimerObject);
    this.props.toggleNewTimer(false);
  }
  render() {
    return (
      <SidebarContent>
        <SidebarUpper>
          <View style={{ margin: '4%' }}>
            <Icon.Button
              name='arrow-upward'
              onPress={() => this.addNewTimer('Test Timer 1', 'increment', 1, 10)}
              style={SidebarStyles.SidebarButton}
            >
              <Text style={SidebarStyles.SidebarButtonText}>
                Increment Tracker
              </Text>
            </Icon.Button>
          </View>
        </SidebarUpper>
      </SidebarContent>
    );
  }
}
NewTimer.propTypes = {
  addNewTimer: PropTypes.func.isRequired,
  toggleNewTimer: PropTypes.func.isRequired,
};
function bindActions(dispatch) {
  return {
    toggleNewTimer: newTimerToggled =>
      dispatch(sidebarActions.toggleNewTimer(newTimerToggled)),
    addNewTimer: newTimer =>
      dispatch(addNewTimer(newTimer)),
  };
}

const mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
});

export default connect(mapStateToProps, bindActions)(NewTimer);
