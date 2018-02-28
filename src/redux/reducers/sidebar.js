const initialState = {
  newTimerToggled: false,
  customTimerToggled: false,
  updateTimerToggled: false,
  selectedTimer: {}
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
      console.log('In Reducer, Action is TOGGLE_DEFAULT_VIEW: ', action);
      return {
        ...state,
        newTimerToggled: false,
        customTimerToggled: false,
        updateTimerToggled: false
      }
    }
    case 'TOGGLE_UPDATE_TIMER': {
      console.log('In Reducer, Action is TOGGLE_UPDATE_TIMER: ', action);
      return {
      ...state,
      updateTimerToggled: action.payload.updateTimerToggled,
      selectedTimer: action.payload.selectedTimer
      }
    }
    default:
      return state;
  }
}
