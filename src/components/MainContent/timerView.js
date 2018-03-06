import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Alert,
  TouchableHighlight
} from 'react-native';
import { connect } from  'react-redux';
import { updateTimer, incrementTimer, deleteTimer } from '../../redux/actions/timers';
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
import SortableListView from 'react-native-sortable-listview';

class TimerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateTimer : false,
      currentTimer: {},
      swipeView: false,
      trackersObject: {},
      order: []
    }
  }
  componentWillReceiveProps(props) {
    console.log('PROPS BEING RECEIVED', props)
    if(props.updateTimerToggled === true){
      this.closeSwipeView(true)
    }
    this.prepareScrollView(props);
  }
  closeSwipeView(close) {
    if(close){
      this.setState({ swipeView: true })
    }
    else {
      this.setState({ swipeView: false })
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
  deleteTimer(timerID) {
    this.closeSwipeView(true);
     Alert.alert(
        'Warning',
        'Deleting a tracker cannot be undone',
        [
          {text: 'Cancel', onPress: () => {}, style: 'cancel'},
          {text: 'Delete', onPress: () => this.props.deleteTimer(timerID)}
        ]
      );
  }
  buildTimer(timer){
    return (
      <Swipeout
        autoClose={true}
        close={this.state.swipeView}
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
          },
          {
            component: <Icon.Button
              name='trash'
              onPress={() => this.deleteTimer(timer.id)}
              borderRadius={0}
              iconStyle={{marginRight: 0}}
              style={{ backgroundColor: 'red', width: '100%', height:'100%', justifyContent: 'center', borderColor: '#50565B', borderBottomWidth: 2, borderLeftWidth: 2}}
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
              <Text style={{fontSize: 10}}>Do Something: {timer.value} Goal Achieved: 0%</Text>
            </TrackerLeftContainer>
            <TrackerRightContainer>
              <Icon.Button
                name='plus-circle'
                onPress={() => this.props.incrementTimer(timer)}
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
  prepareScrollView(props) {
    console.log('PREPARING... ');
    console.log(props.savedTimers);
    let trackerObj = {};
    let timers = props.savedTimers;
    for(var i = 0; i< timers.length; i++){
      console.log('Timer Found...')
      trackerObj[i] = timers[i];
    }
    let order = Object.keys(trackerObj);
    this.setState({trackersObject: trackerObj, order})
  }
  render() {
    console.log('saved in state: ', this.props.sortHandlers);
    return (
        <SortableListView
        style={{ flex: 1 }}
        data={this.state.trackersObject}
        order={this.state.order}
        onRowMoved={e => {
          let { order } = this.state;
          console.log(e);
          order.splice(e.to, 0, order.splice(e.from, 1)[0])
          this.setState({ order })
        }}
        renderRow={row =>

          <TouchableHighlight
            underlayColor={'#eee'}
            {...this.props.sortHandlers}
          >
            <View style={{flex: 1, backgroundColor: '#343A3F', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Icon name='navicon' size={14} style={{flex: 0.1, borderTopWidth: 1, borderColor: 'white', backgroundColor: '#343A3F',color:'white', textAlign: 'center', alignItems:'center'}}/>
            <Swipeout
              style={{backgroundColor: 'red', flex: 0.9}}
              autoClose={true}
              close={this.state.swipeView}
              right={[
                {
                  component: <Icon.Button
                    name='wrench'
                    onPress={() => this.props.toggleUpdateTimer(true, row)}
                    borderRadius={0}
                    iconStyle={{marginRight: 0}}
                    style={{ backgroundColor: '#343A3F', width: '100%', height:'100%', justifyContent: 'center', borderColor: '#50565B', borderBottomWidth: 2, borderLeftWidth: 2}}
                    backgroundColor='#4D66A0'
                    >
                    </Icon.Button>
                },
                {
                  component: <Icon.Button
                    name='trash'
                    onPress={() => this.deleteTimer(row.id)}
                    borderRadius={0}
                    iconStyle={{marginRight: 0}}
                    style={{ backgroundColor: 'red', width: '100%', height:'100%', justifyContent: 'center', borderColor: '#50565B', borderBottomWidth: 2, borderLeftWidth: 2}}
                    backgroundColor='#4D66A0'
                    >
                    </Icon.Button>
                }
              ]}
              >
                <TrackerContainer>
                  <View style={{flexDirection: 'row'}}>
                    <TrackerLeftContainer>
                      <Text>{row.name}</Text>
                      <Text style={{fontSize: 10}}>Do Something: {row.value} Goal Achieved: 0%</Text>
                    </TrackerLeftContainer>
                    <TrackerRightContainer>
                      <Icon.Button
                        name='plus-circle'
                        onPress={() => this.props.incrementTimer(row)}
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
            </View>
          </TouchableHighlight>

      }
      />
    )
  }
}
function bindActions(dispatch) {
  return {
    toggleUpdateTimer: (updateTimerToggled, selectedTimer) => dispatch(toggleUpdateTimer(updateTimerToggled, selectedTimer)),
    incrementTimer: (timer) => dispatch(incrementTimer(timer)),
    deleteTimer: (timerID) => dispatch(deleteTimer(timerID))
  }
}
mapStateToProps = state => ({
  savedTimers : state.timers.savedTimers,
  updateTimerToggled : state.sidebar.updateTimerToggled
})

export default connect(mapStateToProps, bindActions)(TimerView);
