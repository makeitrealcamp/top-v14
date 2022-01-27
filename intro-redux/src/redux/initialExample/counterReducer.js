import * as counterTypes from './counterTypes';

const initialState = {
  value: 0
}

export const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case counterTypes.INCREASE:
      console.log('increase has been called');
      return state + 1
    case counterTypes.DECREASE:
      console.log('decrease has been called');
      return state - 1
    case counterTypes.RESET:
      return 0
    default:
      return state
  }

}