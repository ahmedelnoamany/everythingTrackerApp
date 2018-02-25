import {
  TOGGLE_NEW_TIMER
} from './types';

export const toggleNewTimer = (newTimerToggled) => {
  return {
    type: TOGGLE_NEW_TIMER,
    payload: newTimerToggled
  };
};
