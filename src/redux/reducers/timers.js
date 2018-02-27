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
      var currentTimer = savedTimersArray.filter((timer, index) => (
         timer.id === action.payload.id
      ));
      console.log('The timer to be updated was found : ', currentTimer)
      return {
        ...state
      }
    }
    default :
      return state;
  }
}
