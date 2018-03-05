import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sidebarActions from '../../redux/actions/sidebar';
import {
  addNewTimer
} from '../../redux/actions/timers';
import {
  SidebarContent,
  SidebarUpper,
  SidebarButton,
  ButtonTextStyle
} from '../../styles/sidebarStyles';

class NewTimer extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentID: 0
    }
  };
  componentDidMount() {
    console.log('COMPONENT MOUNTING')
  }
  addNewTimer = (name, type, stepSize) =>{
    let newID = 1;
    let newTimerObject = {
      'id' : newID,
      'name': name,
      'type' : type,
      'increment' : stepSize,
      'value' : 0
    }
    this.props.addNewTimer(newTimerObject);
    this.props.toggleNewTimer(false);
    this.setState({ currentID: newID });

  }
  render() {
    console.log(this.state.currentID);
    return (
      <SidebarContent>
        <SidebarUpper>
          <SidebarButton
            onPress= {() => this.addNewTimer('Test Timer 1','increment', 1)}
          >
            <ButtonTextStyle>Increment Tracker</ButtonTextStyle>
          </SidebarButton>
        </SidebarUpper>
      </SidebarContent>
    )
  }
}
function bindActions(dispatch){
    return {
        toggleNewTimer: (newTimerToggled) => dispatch(sidebarActions.toggleNewTimer(newTimerToggled)),
        addNewTimer: (newTimer) => dispatch(addNewTimer(newTimer)),
    };
}

const mapStateToProps = state => ({
  newTimerToggled: state.sidebar.newTimerToggled,
});

export default connect(mapStateToProps, bindActions)(NewTimer);
