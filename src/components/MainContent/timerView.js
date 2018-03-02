import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';
import { connect } from  'react-redux';
import { updateTimer } from '../../redux/actions/timers';
import { toggleUpdateTimer } from '../../redux/actions/sidebar';
import {
  Content
} from '../../styles/contentStyles';
import {
  TrackersContainer,
  TrackerContainer,
  TrackerLeftContainer,
  TrackerRightContainer,
  TrackerCenterContainer
} from '../../styles/trackerViewStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      <TrackerContainer>
        <View style={{flex: 0.5, alignItems: 'center', backgroundColor: 'white'}}>
          <Text>{timer.name}</Text>
          <Text>{timer.increment}</Text>
        </View>
        <View style={{flex: 0.25, backgroundColor: 'red'}}>
          <Button
            title='+'
          />
        </View>
        <View style={{flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
          <Icon.Button
            name='wrench'
            onPress={() => this.props.toggleUpdateTimer(true, timer)}
            size={15}
            >
            </Icon.Button>
        </View>
      </TrackerContainer>
    )
  }
  render() {
    console.log('saved in state: ', this.state.currentTimer);
    return (
      <TrackersContainer>
        {!this.state.updateTimer && this.displayTimers(this.props.savedTimers)}
      </TrackersContainer>
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
