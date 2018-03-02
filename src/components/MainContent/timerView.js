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
import Swipeout from 'react-native-swipeout';
const swipeButtons = [
  {
    text:'button'
  }
]
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
      <Swipeout
        right={[
          {
            component: <Icon.Button
              name='wrench'
              onPress={() => this.props.toggleUpdateTimer(true, timer)}
              borderRadius={0}
              iconStyle={{marginRight: 0}}
              style={{ width: '100%', height:'100%', justifyContent: 'center', borderBottomWidth: 2, borderLeftWidth: 2}}
              backgroundColor='#4D66A0'
              >
              </Icon.Button>
          }
        ]}
        >
        <TrackerContainer>
          <TrackerLeftContainer>
            <Text>{timer.name}</Text>
            <Text>{timer.increment}</Text>
          </TrackerLeftContainer>
          <TrackerRightContainer>
            <Icon.Button
              name='plus-circle'
              onPress={() => this.props.toggleUpdateTimer(true, timer)}
              borderRadius={0}
              iconStyle={{ marginRight: 0 }}
              style={{ width: '100%', justifyContent: 'center'}}
              backgroundColor='#4D66A0'
              >
              </Icon.Button>
          </TrackerRightContainer>
        </TrackerContainer>
      </Swipeout>

    )
  }
  render() {
    console.log('saved in state: ', this.state.currentTimer);
    return (
      <TrackersContainer>
        {this.displayTimers(this.props.savedTimers)}
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
