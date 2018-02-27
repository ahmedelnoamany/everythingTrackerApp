import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sidebarActions from '../../redux/actions/sidebar';
import {
  addNewTimer
} from '../../redux/actions/timers';
import {
  Text,
  View,
  Button
} from 'react-native';

class NewTimer extends Component {
  addNewTimer(id, type, stepSize) {
    let newTimerObject = {
      'id' : id,
      'type' : type,
      'increment' : stepSize
    }
    this.props.addNewTimer(newTimerObject);

  }
  render() {
    return (
      <View>
        <Text>New Timer</Text>
        <Button
          title='New Incremenet Timer'
          onPress= {() => this.addNewTimer('testTimer1', 'increment', 1)}
        />
      </View>
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
