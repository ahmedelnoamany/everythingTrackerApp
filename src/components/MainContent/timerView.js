import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView
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
        autoClose={true}
        close={this.props.updateTimerToggled}
        right={[
          {
            component: <Icon.Button
              name='wrench'
              onPress={() => this.props.toggleUpdateTimer(true, timer)}
              borderRadius={0}
              iconStyle={{marginRight: 0}}
              style={{ backgroundColor: '#343A3F', width: '100%', height:'100%', justifyContent: 'center', borderColor: '#50565B', borderBottomWidth: 2, borderLeftWidth: 2}}
              backgroundColor='#4D66A0'
              >
              </Icon.Button>
          }
        ]}
        >
        <TrackerContainer>
          <View style={{flexDirection: 'row'}}>
            <TrackerLeftContainer>
              <Text>{timer.name}</Text>
              <Text style={{fontSize: 10}}>Do Something: {timer.id} Goal Achieved: 0%</Text>
            </TrackerLeftContainer>
            <TrackerRightContainer>
              <Icon.Button
                name='plus-circle'
                onPress={() => this.props.toggleUpdateTimer(true, timer)}
                borderRadius={0}
                iconStyle={{ marginRight: 0 }}
                style={{backgroundColor: '#343A3F', height: '100%',justifyContent: 'center'}}
                backgroundColor='#4D66A0'
                >
                </Icon.Button>
            </TrackerRightContainer>
          </View>

        </TrackerContainer>
      </Swipeout>

    )
  }
  render() {
    console.log('saved in state: ', this.state.currentTimer);
    return (
      <TrackersContainer>
        <ScrollView style={{height: '100%'}}>
          {this.displayTimers(this.props.savedTimers)}
        </ScrollView>
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
  savedTimers : state.timers.savedTimers,
  updateTimerToggled : state.sidebar.updateTimerToggled
})

export default connect(mapStateToProps, bindActions)(TimerView);
