import {
  ADD_NEW_TIMER,
  UPDATE_TIMER
} from './types';

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
