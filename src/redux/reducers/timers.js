const initialState = {
  savedTimers : [],
  currentTimerID: 0
}
export default function(state = initialState, action) {
  if(!state) {
    state = initialState;
  }
  switch(action.type) {
    case 'ADD_NEW_TIMER': {
      var currentTimerID = state.currentTimerID;
      currentTimerID++;
      action.payload.id = currentTimerID
      action.payload.name = `Testing Timer ${currentTimerID}`;
      var updatedSavedTimersArray = state.savedTimers.slice();
      updatedSavedTimersArray.push(action.payload);
      return {
        ...state,
        savedTimers : updatedSavedTimersArray,
        currentTimerID: currentTimerID
      }
    }
    case 'UPDATE_TIMER': {
      var savedTimersArray = state.savedTimers.slice();
      var currentTimerPos = null;
      var currentTimer = savedTimersArray.map((timer, index) => {
         if(timer.id === action.payload.id){
           currentTimerPos = index;
           return timer;
         }
      });
      currentTimer = action.payload;
      savedTimersArray[currentTimerPos] = currentTimer;
      return {
        ...state,
        savedTimers : savedTimersArray
      }
    }
    case 'DELETE_TIMER': {
      var savedTimersArray = state.savedTimers.slice();
      savedTimersArray.map((timer, index) => {
        if(timer.id === action.payload){
          savedTimersArray.splice(index, 1);
        }
      })
      return {
        ...state,
        savedTimers: savedTimersArray
      }
    }
      case 'UPDATE_TRACKER_ORDER': {
      var updatedOrder = updateTrackerOrder(state.savedTimers.slice(), action.payload);
      return {
        ...state,
        savedTimers: updatedOrder
      }
    }
    default :
      return state;
  }
}

function updateTrackerOrder(savedTimers, event) {
  let newTimers = savedTimers.slice();
  let tempTracker = newTimers[event.from];
  newTimers.splice(event.from, 1);
  newTimers.splice(event.to, 0, tempTracker);
  return newTimers;
}
