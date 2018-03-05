import {
  ADD_NEW_TIMER,
  UPDATE_TIMER,
  DELETE_TIMER
} from './types';
import {
  Alert
} from 'react-native';

export const addNewTimer = (timer) => {

  return {
    type : ADD_NEW_TIMER,
    payload: timer
  }
}

export const updateTimer = (updatedTimer) => {

  return {
    type: UPDATE_TIMER,
    payload: updatedTimer
  }
}

export const incrementTimer = (timer) => {

  var incrementedTimer = timer;
  incrementedTimer.value += incrementedTimer.increment;

  return {
    type: UPDATE_TIMER,
    payload: incrementedTimer
  }
}

export const deleteTimer = (timerID) => {
  return {
    type: DELETE_TIMER,
    payload: timerID
  }
}
