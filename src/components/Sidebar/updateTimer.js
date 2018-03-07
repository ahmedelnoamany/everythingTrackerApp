import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { updateTimer } from '../../redux/actions/timers';
import { toggleUpdateTimer } from '../../redux/actions/sidebar';

class UpdateTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentSelectedTimer.name,
    };
  }
  buildUpdatedTimer() {
    this.props.toggleUpdateTimer(false);
    const currentTimer = this.props.currentSelectedTimer;
    currentTimer.name = this.state.name;
    this.props.updateTimer(currentTimer);
  }
  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={name => this.setState({ name })}
          placeholder='name'
        />
        <Button
          title='Save!'
          onPress={() => this.buildUpdatedTimer()}
        />
      </View>
    );
  }
}
function bindActions(dispatch) {
  return {
    updateTimer: updatedTimer =>
      dispatch(updateTimer(updatedTimer)),
    toggleUpdateTimer: () =>
      dispatch(toggleUpdateTimer()),
  };
}

const mapStateToProps = state => ({
  currentSelectedTimer: state.sidebar.selectedTimer,
});

export default connect(mapStateToProps, bindActions)(UpdateTimer);
