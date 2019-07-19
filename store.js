import { createStore, combineReducers } from 'redux';
import placeReducer from './reducers/placeReducer';
import calculatorReducer from './reducers/calculatorReducer'
const rootReducer = combineReducers({
  places: placeReducer,
  number : calculatorReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;