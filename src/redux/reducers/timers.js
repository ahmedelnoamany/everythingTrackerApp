const initialState = {
  savedTimers : [],
  savedTrackersObject: {},
  order : [],
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
      action.payload.id = currentTimerID;
      var updatedSavedTimersArray = state.savedTimers.slice();
      updatedSavedTimersArray.push(action.payload);
      var updatedTrackersObject = buildTrackerObject(updatedSavedTimersArray);
      return {
        ...state,
        savedTimers : updatedSavedTimersArray,
        savedTrackersObject: updatedTrackersObject.trackersObject,
        order: updatedTrackersObject.order,
        currentTimerID: currentTimerID
      }
    }
    case 'UPDATE_TIMER': {
      var savedTimersArray = state.savedTimers.slice();
      var currentTimerPos = null;
      console.log('SAVED TIMERS: ', savedTimersArray);
      console.log('CURRENT TIMER TO UPDATE ID: ', action.payload.id);
      var currentTimer = savedTimersArray.map((timer, index) => {
          console.log('IN MAP')
         if(timer.id === action.payload.id){
           currentTimerPos = index;
           console.log('POSITION TO UPDATE: ', currentTimerPos)
           return timer;
         }
         else {
           console.log('NOTHING FOUND');
         }
      });
      currentTimer = action.payload;
      savedTimersArray[currentTimerPos] = currentTimer;
      console.log('The timer to be updated was found : ', currentTimer, currentTimerPos)
      return {
        ...state,
        savedTimers : savedTimersArray
      }
    }
    case 'UPDATE_TRACKER_ORDER': {
      // var savedTimersArray = state.savedTimers.slice();
      // console.log('Trackers before orderChange: ', savedTimersArray, state.order);
      // var tempTracker = savedTimersArray[action.payload.to];
      // savedTimersArray[action.payload.to] = savedTimersArray[action.payload.from];
      // savedTimersArray[action.payload.from] = tempTracker;
      var updatedOrder = updateTrackerObject(state.savedTrackersObject,state.order, action.payload);
      return {
        ...state,
        order: updatedOrder
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
    default :
      return state;
  }
}

function buildTrackerObject(timersArray) {
  let trackersObject = {};
  for(var i = 0; i < timersArray.length; i++){
    trackersObject[i] = timersArray[i];
  }
  let order = Object.keys(trackersObject);
  return {trackersObject, order};
}

function updateTrackerObject(trackerObject, order, event) {
  let updatedOrder = order;
  let tempTracker = updatedOrder[event.from];
  updatedOrder.splice(event.from, 1);
  updatedOrder.splice(event.to, 0, tempTracker);

  return updatedOrder;
}
