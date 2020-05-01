import * as a from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { beer, brewery, price, aContent, pints, id, createAt } = action;

  switch (action.type) {
    case a.CHANGE_SELECTED:
      const newState = {
        beer,
        brewery,
        price,
        aContent,
        pints,
        id,
        createAt
      };
      return newState;
    default:
      return state;
  }
};
