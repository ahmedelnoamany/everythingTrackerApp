import {
  TOGGLE_NEW_TIMER,
  TOGGLE_CUSTOM_TIMER,
  TOGGLE_DEFAULT_VIEW
} from './types';

export const toggleNewTimer = (newTimerToggled) => {
  return {
    type: TOGGLE_NEW_TIMER,
    payload: newTimerToggled
  };
};

export const toggleCustomTimer = (customTimerToggled) => {
  return {
    type: TOGGLE_CUSTOM_TIMER,
    payload: customTimerToggled
  };
};

export const toggleDefaultView = () => {
  return {
    type: TOGGLE_DEFAULT_VIEW,
    payload: true
  };
};
