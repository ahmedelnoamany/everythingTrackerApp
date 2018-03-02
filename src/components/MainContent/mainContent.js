import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
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

  renderView = () => (

      <Content>
        {(this.props.newTimerToggled || this.props.customTimerToggled || this.props.updateTimerToggled) &&(
      <TouchableHighlight
        onPress={ () => this.props.toggleDefaultView() }
        style={{flex: 0.7, position: 'absolute', zIndex: 1000, backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', width: '100%', alignItems:'center', justifyContent: 'center'}}
        activeOpacity= {0.2}
        underlayColor="rgba(0, 0, 0, 0)"
        >
          <Text style={{ color:'white' }}>Click to go back</Text>
        </TouchableHighlight>)}
          <TimerView />
    </Content>

  )
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
