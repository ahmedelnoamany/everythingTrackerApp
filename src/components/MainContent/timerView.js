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
import { updateTimer, updateTrackerOrder, incrementTimer, deleteTimer } from '../../redux/actions/timers';
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
    }
  }
  componentWillReceiveProps(props) {
    if(props.updateTimerToggled === true){
      this.closeSwipeView(true)
    }
  }
  closeSwipeView(close) {
    if(close){
      this.setState({ swipeView: true })
    }
    else {
      this.setState({ swipeView: false })
    }
  }

  buildTrackerObject(timersArray) {
    let trackersObject = {};
    let order = [];
    for(var i = 0; i < timersArray.length; i++){
      trackersObject[i] = timersArray[i];
    }
    if(order.length === 0) {
      order = Object.keys(trackersObject);
    }
    else {
      order.push((Number(order[order.length - 1]) + 1).toString());
    }
    return trackersObject;
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
  render() {
    return (
        <SortableListView
        style={{ flex: 1 }}
        data={JSON.parse(JSON.stringify(this.buildTrackerObject(this.props.savedTimers)))}
        order={this.props.savedTimers.map((item, index) => {
          return index.toString();
        })}
        onRowMoved={e => this.props.updateTrackerOrder(e)}
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
    updateTrackerOrder: (event) => dispatch(updateTrackerOrder(event)),
    incrementTimer: (timer) => dispatch(incrementTimer(timer)),
    deleteTimer: (timerID) => dispatch(deleteTimer(timerID))
  }
}
mapStateToProps = state => ({
  savedTrackersObject : state.timers.savedTrackersObject,
  order: state.timers.order,
  updateTimerToggled : state.sidebar.updateTimerToggled,
  savedTimers: state.timers.savedTimers
})

export default connect(mapStateToProps, bindActions)(TimerView);
