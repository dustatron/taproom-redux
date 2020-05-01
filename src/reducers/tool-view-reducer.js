import * as a from '../actions/ActionTypes';
export default (state = 0, action) => {
  switch (action.type) {
    case a.VIEW_KEY_ADD:
      return 0;
    default:
      return state;
  }
};
