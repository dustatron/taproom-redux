import * as a from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { beer, brewery, price, aContent, pints, id, createAt } = action;
  switch (action.type) {
    case a.ADD_KEY:
      const addingToState = Object.assign({}, state, {
        [id]: {
          beer,
          brewery,
          aContent,
          price,
          pints,
          id,
          createAt
        }
      });
      return addingToState;

    case a.DELETE_KEY:
      const deleteFromState = { ...state };
      delete deleteFromState[id];
      return deleteFromState;

    case a.SELL_PINT:
      const pintCountMinusOne = (state[id].pints -= 1);
      const newPintState = { ...state, [id]: { ...state[id], pints: pintCountMinusOne } };
      return newPintState;
    default:
      return state;
  }
};
