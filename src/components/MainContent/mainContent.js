import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { toggleDefaultView } from '../../redux/actions/sidebar';
import styled from 'styled-components';

import Sidebar from '../Sidebar/sidebar';

const MainContent = styled.View`
  flex: 0.9;
  width: 100%;
  flex-direction: row;
`

const Content = styled.View`
  width: 100%;
  flex: 0.9;
  background-color: white
`;

class MainContainer extends Component {
  
  renderReturn = () => {
    return (
      <TouchableWithoutFeedback onPress={ () => this.props.toggleDefaultView() }
        >
          <Content>
            <Text style={{ width: '100%', height: '100%', backgroundColor: 'red' }}>Click to go back</Text>
          </Content>
      </TouchableWithoutFeedback>
    )
  }
  render() {
    return (
      <MainContent>
        <Sidebar />
        {this.renderReturn()}

      </MainContent>
    )
  }
}

function bindActions(dispatch) {
  return {
    toggleDefaultView: () => dispatch(toggleDefaultView()),
  }
}

export default connect(() => ({}), bindActions)(MainContainer);
