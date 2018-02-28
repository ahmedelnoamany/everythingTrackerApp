import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { updateTimer } from '../../redux/actions/timers';

class UpdateTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : this.props.currentSelectedTimer.name,
    }
  }
  buildUpdatedTimer = () => {
    var currentTimer = this.props.currentSelectedTimer;
    currentTimer.name = this.state.name;
    console.log('UpdatedTimer is : ', currentTimer);
  }
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText= {(name) => this.setState({name})}
          placeholder = 'name'
        />
        <Button
          title='Save!'
          onPress={() => this.buildUpdatedTimer()}
        />
      </View>
    )
  }
}
function bindActions(dispatch) {
  return {
    updateTimer: (updatedTimer) => dispatch(updateTimer(updatedTimer)),
  }
}

mapStateToProps = state => ({
  currentSelectedTimer: state.sidebar.selectedTimer
})

export default connect(mapStateToProps, bindActions)(UpdateTimer);
