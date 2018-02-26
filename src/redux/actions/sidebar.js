import {
  TOGGLE_NEW_TIMER
} from './types';

export const toggleNewTimer = (newTimerToggled) => {
  console.log('IN ACTION');
  return {
    type: TOGGLE_NEW_TIMER,
    payload: newTimerToggled
  };
};
