const initialState = {
  newTimerToggled: false,
  customTimerToggled: false
}
export default function (state = initialState, action){
  if(!state){
    state = initialState;
  }
  switch(action.type){
    case 'TOGGLE_NEW_TIMER':
    {
      console.log('In Reducer, Action is : ', action);
      return {
        ...state,
        newTimerToggled : action.payload
      }
    }
    default:
      return state;
  }
}
