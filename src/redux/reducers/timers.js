const initialState = {
  savedTimers : [],
}
export default function(state = initialState, action) {
  if(!state) {
    state = initialState;
  }
  switch(action.type) {
    case 'ADD_NEW_TIMER': {
      console.log('IN ADD NEW TIMER');
      var updatedSavedTimersArray = state.savedTimers.slice();
      updatedSavedTimersArray.push(action.payload);
      console.log('NEW RESULTS: ', updatedSavedTimersArray);
      return {
        ...state,
        savedTimers : updatedSavedTimersArray
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
      console.log('The timer to be updated was found : ', currentTimer, currentTimerPos)
      return {
        ...state,
        savedTimers : savedTimersArray
      }
    }
    default :
      return state;
  }
}
