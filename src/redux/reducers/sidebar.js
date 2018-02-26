const initialState = {
  newTimerToggled: false,
  customTimerToggled: false
}
export default function (state = initialState, action){
  if(!state){
    state = initialState;
  }
  switch(action.type){
    case 'TOGGLE_NEW_TIMER': {
      console.log('In Reducer, Action is TOGGLE_NEW_TIMER: ', action);
      return {
        ...state,
        newTimerToggled : action.payload
      }
    }
    case 'TOGGLE_CUSTOM_TIMER': {
      console.log('In Reducer, Action is TOGGLE_NEW_TIMER: ', action);
      return {
        ...state,
        customTimerToggled : action.payload
      }
    }
    case 'TOGGLE_DEFAULT_VIEW': {
      console.log('IN REDUCER');
      return {
        ...state,
        newTimerToggled: false,
        customTimerToggled: false
      }
    }
    default:
      return state;
  }
}
