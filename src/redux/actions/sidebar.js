import {
  TOGGLE_NEW_TIMER,
  TOGGLE_CUSTOM_TIMER,
  TOGGLE_DEFAULT_VIEW,
  TOGGLE_UPDATE_TIMER,
} from './types';

export const toggleNewTimer = newTimerToggled => ({
  type: TOGGLE_NEW_TIMER,
  payload: newTimerToggled,
});

export const toggleCustomTimer = customTimerToggled => ({
  type: TOGGLE_CUSTOM_TIMER,
  payload: customTimerToggled,
});

export const toggleDefaultView = () => ({
  type: TOGGLE_DEFAULT_VIEW,
  payload: true,
});

export const toggleUpdateTimer = (updateTimerToggled, selectedTimer) => ({
  type: TOGGLE_UPDATE_TIMER,
  payload: { updateTimerToggled, selectedTimer },
});
