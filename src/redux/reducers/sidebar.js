export default function (state = initialState, action){
  if(!state){
    state = initialState;
  }
  switch(action.type){
    default:
      return state;
  }
}
