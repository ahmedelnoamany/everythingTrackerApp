import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { connect } from  'react-redux';
import { updateTimer } from '../../redux/actions/timers';
import { toggleUpdateTimer } from '../../redux/actions/sidebar';
import {
  Content
} from '../../styles/contentStyles';

class TimerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateTimer : false,
      currentTimer: {}
    }
  }
  displayTimers(timersArray) {
    console.log('DISPLAY TIMERS RECIEVED: ', timersArray);
    if(timersArray){
      console.log('Found Timer to Display');
      return timersArray.map((timer, index) => (
          this.buildTimer(timer)
      ));
    }

  }
  buildTimer(timer){
    return (
      <View>
        <View>
          <Text>{timer.name}</Text>
        </View>
        <View>
          <Button
            title='Modify'
            onPress={() => this.props.toggleUpdateTimer(true, timer)}
          />
        </View>
      </View>
    )
  }
  render() {
    console.log('saved in state: ', this.state.currentTimer);
    return (
      <Content>
        <Text style={{color: '#27324C'}}>Timers</Text>
        {!this.state.updateTimer && this.displayTimers(this.props.savedTimers)}
      </Content>
    )
  }
}
function bindActions(dispatch) {
  return {
    toggleUpdateTimer: (updateTimerToggled, selectedTimer) => dispatch(toggleUpdateTimer(updateTimerToggled, selectedTimer))
  }
}
mapStateToProps = state => ({
  savedTimers : state.timers.savedTimers
})

export default connect(mapStateToProps, bindActions)(TimerView);
