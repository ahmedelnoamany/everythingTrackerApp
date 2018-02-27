import { combineReducers } from 'redux';

import sidebar from './sidebar';
import timers from './timers';

export default combineReducers({
    sidebar,
    timers
  });
