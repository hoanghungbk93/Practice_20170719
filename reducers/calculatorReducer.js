import { INCREMENT } from '../actions/types';

const initialState = {
  number : 0
};

const calculatorReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
          number: action.payload + 1
      };
    default:
      return state;
  }
}

export default calculatorReducer;