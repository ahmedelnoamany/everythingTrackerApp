import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import {
  MainContent,
  Content
} from '../../styles/contentStyles';
import { connect } from 'react-redux';
import { toggleDefaultView } from '../../redux/actions/sidebar';


import Sidebar from '../Sidebar/sidebar';
import TimerView from './timerView';

class MainContainer extends Component {

  renderView = () => {
    if(this.props.newTimerToggled || this.props.customTimerToggled || this.props.updateTimerToggled) {
      return (
        <TouchableWithoutFeedback onPress={ () => this.props.toggleDefaultView() }
          >
            <Content>
              <Text style={{ width: '100%', height: '100%' }}>Click to go back</Text>
            </Content>
        </TouchableWithoutFeedback>
      )
    }
    else {
      return (
          <TimerView />
      )
    }

  }
  render() {
    return (
      <MainContent>
        <Sidebar />
        { this.renderView() }
      </MainContent>
    )
  }
}

function bindActions(dispatch) {
  return {
    toggleDefaultView: () => dispatch(toggleDefaultView()),

  }
}
mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
  customTimerToggled : state.sidebar.customTimerToggled,
  updateTimerToggled : state.sidebar.updateTimerToggled
})

export default connect(mapStateToProps, bindActions)(MainContainer);
