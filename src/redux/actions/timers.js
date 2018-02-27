import {
  ADD_NEW_TIMER
} from './types';

export const addNewTimer = (timer) => {
  return {
    type : ADD_NEW_TIMER,
    payload: timer
  }
}
