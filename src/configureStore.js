import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './redux/reducers';

export default function configureStore(initalState){
  const enhancer = compose(
    applyMiddleware(

    )
  );
  let store = createStore(reducer, enhancer);
  return store;
};
