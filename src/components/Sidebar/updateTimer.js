import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateTimer } from '../../redux/actions/timers';
import { toggleUpdateTimer } from '../../redux/actions/sidebar';
import {
  SidebarContent,
  SidebarUpper,
  SidebarLower,
  SidebarStyles,
} from '../../styles/sidebarStyles';

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
      <SidebarContent>
        <SidebarUpper>
          <View style={{margin: '4%'}}>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                textAlign:'center'
              }}
              onChangeText={name => this.setState({ name })}
              placeholder='name'
            />
          </View>
        </SidebarUpper>
        <SidebarLower>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableHighlight onPress={() => this.buildUpdatedTimer()} >
              <Icon name='save' size={50} color='#2B2D42' />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.toggleUpdateTimer(false)} >
              <Icon name='cancel' size={50} color='#2B2D42' />
            </TouchableHighlight>
          </View>
        </SidebarLower>
      </SidebarContent>
    );
  }
}
UpdateTimer.propTypes = {
  currentSelectedTimer: PropTypes.object.isRequired,
  toggleUpdateTimer: PropTypes.func.isRequired,
  updateTimer: PropTypes.func.isRequired,
};
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
