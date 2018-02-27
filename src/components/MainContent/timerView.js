import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { connect } from  'react-redux';
import { updateTimer } from '../../redux/actions/timers';
import {
  Content
} from '../../styles/contentStyles';

class TimerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateTimer : false
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
          <Text>{timer.id}</Text>
        </View>
        <View>
          <Button
            title='Rename'
            onPress={() => this.updateTimer(timer)}
          />
        </View>
      </View>
    )
  }
  updateTimer(timer) {
    this.setState({updateTimer : true});
    console.log('In update timer, ', this.state.updateTimer);
    return (
      <View>
        <Text>Update Timer!</Text>
      </View>
    )
  }
  render() {
    return (
      <Content>
        <Text>Timers</Text>
        {!this.state.updateTimer && this.displayTimers(this.props.savedTimers)}
      </Content>
    )
  }
}
function bindActions(dispatch) {
  return {
    updateTimer : (updatedTimer) => dispatch(updateTimer(updatedTimer))
  }
}
mapStateToProps = state => ({
  savedTimers : state.timers.savedTimers
})

export default connect(mapStateToProps, bindActions)(TimerView);
