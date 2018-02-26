import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sidebarActions from '../../redux/actions/sidebar';
import {
  Text,
  View,
  Button
} from 'react-native';

class CustomTimer extends Component {
  render() {
    return (
      <View>
        <Text>Custom Timer</Text>
        <Button
          onPress={() => this.props.toggleCustomTimer(false)}
          title='Back'
        />
      </View>
    )
  }
}

function bindActions(dispatch) {
  return {
    toggleCustomTimer: (customTimerToggled) => dispatch(sidebarActions.toggleCustomTimer(customTimerToggled)),
  }
}

const mapStateToProps = state => ({
  customTimerToggled : state.sidebar.customTimerToggled,
});

export default connect(mapStateToProps, bindActions)(CustomTimer);
