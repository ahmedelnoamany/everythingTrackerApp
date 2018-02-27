import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from  'react-redux';
import {
  Content
} from '../../styles/contentStyles';

class TimerView extends Component {
  displayTimers(timersArray) {
    console.log('DISPLAY TIMERS RECIEVED: ', timersArray);
    if(timersArray){
      console.log('Found Timer to Display');
      return timersArray.map((timer, index) => (
          <View>
            <Text>Timer</Text>
            <Text>{timer.id}</Text>
            <Text>{timer.type}</Text>
          </View>
      ));
    }

  }
  render() {
    return (
      <Content>
        <Text>Timers</Text>
        {this.displayTimers(this.props.savedTimers)}
      </Content>
    )
  }
}

mapStateToProps = state => ({
  savedTimers : state.timers.savedTimers
})

export default connect(mapStateToProps)(TimerView);
