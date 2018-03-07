import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import * as sidebarActions from '../../redux/actions/sidebar';


const CustomTimer = () => (
  <View>
    <Text>Custom Timer</Text>
  </View>
);


function bindActions(dispatch) {
  return {
    toggleCustomTimer: customTimerToggled =>
      dispatch(sidebarActions.toggleCustomTimer(customTimerToggled)),
  };
}

const mapStateToProps = state => ({
  customTimerToggled: state.sidebar.customTimerToggled,
});

export default connect(mapStateToProps, bindActions)(CustomTimer);
