const initialState = {
  newTimerToggled: false,
  customTimerToggled: false,
  updateTimerToggled: false,
  selectedTimer: {},
};
export default function (state = initialState, action) {
  if (!state) {
    this.state = initialState;
  }
  switch (action.type) {
  case 'TOGGLE_NEW_TIMER': {
    return {
      ...state,
      newTimerToggled: action.payload,
    };
  }
  case 'TOGGLE_CUSTOM_TIMER': {
    return {
      ...state,
      customTimerToggled: action.payload,
    };
  }
  case 'TOGGLE_DEFAULT_VIEW': {
    return {
      ...state,
      newTimerToggled: false,
      customTimerToggled: false,
      updateTimerToggled: false,
    };
  }
  case 'TOGGLE_UPDATE_TIMER': {
    return {
      ...state,
      updateTimerToggled: action.payload.updateTimerToggled,
      selectedTimer: action.payload.selectedTimer,
    };
  }
  default:
    return state;
  }
}
