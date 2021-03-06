import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  MainContent,
  Content,
} from '../../styles/contentStyles';
import { toggleDefaultView } from '../../redux/actions/sidebar';
import Sidebar from '../Sidebar/sidebar';
import TimerView from './timerView';

class MainContainer extends Component {
  renderView() {
    return (
      <Content>
        {(
          this.props.newTimerToggled ||
          this.props.customTimerToggled ||
          this.props.updateTimerToggled
        ) &&
        (
          <TouchableHighlight
            onPress={() => this.props.toggleDefaultView()}
            style={{
              flex: 0.7,
              position: 'absolute',
              zIndex: 1000,
              backgroundColor: 'rgba(0,0,0,0.6)',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            activeOpacity={0.2}
            underlayColor='rgba(0, 0, 0, 0)'
          >
            <Text style={{ color: 'white' }}>Click to go back</Text>
          </TouchableHighlight>)}
        <View style={{ height: '100%' }}>
          <TimerView />
        </View>
      </Content>
    );
  }
  render() {
    return (
      <LinearGradient colors={['#FCFCFC', '#E7E7E5', '#DCDCDA']}>
        <MainContent>
          <Sidebar />
          {this.renderView() }
        </MainContent>
      </LinearGradient>
    );
  }
}
MainContainer.propTypes = {
  newTimerToggled: PropTypes.bool.isRequired,
  customTimerToggled: PropTypes.bool.isRequired,
  updateTimerToggled: PropTypes.bool,
  toggleDefaultView: PropTypes.func.isRequired,
};

MainContainer.defaultProps = {
  updateTimerToggled: false,
};

function bindActions(dispatch) {
  return {
    toggleDefaultView: () => dispatch(toggleDefaultView()),

  };
}
const mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
  customTimerToggled: state.sidebar.customTimerToggled,
  updateTimerToggled: state.sidebar.updateTimerToggled,
});

export default connect(mapStateToProps, bindActions)(MainContainer);
