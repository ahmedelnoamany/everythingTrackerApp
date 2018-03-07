const initialState = {
  savedTimers: [],
  currentTimerID: 0,
};

function updateTrackerOrder(savedTimers, event) {
  const newTimers = savedTimers.slice();
  const tempTracker = newTimers[event.from];
  newTimers.splice(event.from, 1);
  newTimers.splice(event.to, 0, tempTracker);
  return newTimers;
}

export default function (state = initialState, action) {
  if (!state) {
    this.state = initialState;
  }
  switch (action.type) {
  case 'ADD_NEW_TIMER': {
    const updatedSavedTimersArray = state.savedTimers.slice();
    const currentTrackerObj = action.payload;
    let currentTimerID = state.currentTimerID;
    currentTimerID += 1;
    currentTrackerObj.id = currentTimerID;
    currentTrackerObj.name = `Testing Timer ${currentTimerID}`;
    updatedSavedTimersArray.push(currentTrackerObj);
    return {
      ...state,
      savedTimers: updatedSavedTimersArray,
      currentTimerID,
    };
  }
  case 'UPDATE_TIMER': {
    const savedTimersArray = state.savedTimers.slice();
    let currentTimerPos = null;
    let currentTimer = savedTimersArray.map((timer, index) => {
      if (timer.id === action.payload.id) {
        currentTimerPos = index;
        return timer;
      }
      return {};
    });
    currentTimer = action.payload;
    savedTimersArray[currentTimerPos] = currentTimer;
    return {
      ...state,
      savedTimers: savedTimersArray,
    };
  }
  case 'DELETE_TIMER': {
    const savedTimersArray = state.savedTimers.slice();
    savedTimersArray.map((timer, index) => {
      if (timer.id === action.payload) {
        savedTimersArray.splice(index, 1);
      }
      return {};
    });
    return {
      ...state,
      savedTimers: savedTimersArray,
    };
  }
  case 'UPDATE_TRACKER_ORDER': {
    const updatedOrder = updateTrackerOrder(state.savedTimers.slice(), action.payload);
    return {
      ...state,
      savedTimers: updatedOrder,
    };
  }
  default:
    return state;
  }
}
