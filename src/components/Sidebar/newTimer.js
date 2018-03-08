import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as sidebarActions from '../../redux/actions/sidebar';
import { addNewTimer } from '../../redux/actions/timers';
import {
  SidebarContent,
  SidebarUpper,
  SidebarButton,
  ButtonTextStyle,
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
          <SidebarButton
            onPress={() => this.addNewTimer('Test Timer 1', 'increment', 1, 10)}
          >
            <ButtonTextStyle>Increment Tracker</ButtonTextStyle>
          </SidebarButton>
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
