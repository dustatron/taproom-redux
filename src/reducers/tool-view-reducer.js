import * as a from '../actions/ActionTypes';
export default (state = 0, action) => {
  switch (action.type) {
    case a.VIEW_KEY_ADD:
      return 0;
    case a.VIEW_KEY_DETAILS:
      return 1;
    case a.VIEW_KEY_EDIT:
      return 2;
    default:
      return state;
  }
};
