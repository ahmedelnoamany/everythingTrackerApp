import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sidebarActions from '../../redux/actions/sidebar';
import {
  Text,
  View,
  Button
} from 'react-native';

class NewTimer extends Component {
  render() {
    return (
      <View>
        <Text>New Timer</Text>
        <Button
          onPress={() => this.props.toggleNewTimer(false)}
          title='back'
        />
      </View>
    )
  }
}
function bindActions(dispatch){
    return {
        toggleNewTimer: (newTimerToggled) => dispatch(sidebarActions.toggleNewTimer(newTimerToggled)),
    };
}

const mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
});

export default connect(mapStateToProps, bindActions)(NewTimer);
