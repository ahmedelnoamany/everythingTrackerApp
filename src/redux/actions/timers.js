import {
  ADD_NEW_TIMER,
  UPDATE_TIMER,
  UPDATE_TRACKER_ORDER,
  DELETE_TIMER,
} from './types';

export const addNewTimer = timer => ({
  type: ADD_NEW_TIMER,
  payload: timer,
});

export const updateTimer = updatedTimer => ({
  type: UPDATE_TIMER,
  payload: updatedTimer,
});

export const updateTrackerOrder = event => ({
  type: UPDATE_TRACKER_ORDER,
  payload: event,
});

export const incrementTimer = (timer) => {
  const incrementedTimer = timer;
  incrementedTimer.value += incrementedTimer.increment;

  return {
    type: UPDATE_TIMER,
    payload: incrementedTimer,
  };
};

export const deleteTimer = timerID => ({
  type: DELETE_TIMER,
  payload: timerID,
});
