import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sidebarActions from '../../redux/actions/sidebar';
import {
  addNewTimer
} from '../../redux/actions/timers';
import {
  SidebarContent,
  SidebarUpper,
  SidebarButton,
  ButtonTextStyle
} from '../../styles/sidebarStyles';

class NewTimer extends Component {
  addNewTimer(id, name, type, stepSize) {
    let newTimerObject = {
      'id' : id,
      'name': name,
      'type' : type,
      'increment' : stepSize
    }
    this.props.addNewTimer(newTimerObject);
    this.props.toggleNewTimer(false);
  }
  render() {
    return (
      <SidebarContent>
        <SidebarUpper>
          <SidebarButton
            onPress= {() => this.addNewTimer('testTimer1', 'Test Timer 1','increment', 1)}
          >
            <ButtonTextStyle>Increment Timer</ButtonTextStyle>
          </SidebarButton>
        </SidebarUpper>
      </SidebarContent>
    )
  }
}
function bindActions(dispatch){
    return {
        toggleNewTimer: (newTimerToggled) => dispatch(sidebarActions.toggleNewTimer(newTimerToggled)),
        addNewTimer: (newTimer) => dispatch(addNewTimer(newTimer)),
    };
}

const mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
});

export default connect(mapStateToProps, bindActions)(NewTimer);
