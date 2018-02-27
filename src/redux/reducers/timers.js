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
    default :
      return state;
  }
}
