import toolViewReducer from '../../reducers/tool-view-reducer';
import * as a from '../../actions/ActionTypes';

describe('toolViewReducer', () => {
  test('Should return default state if no action is passed to the reducer', () => {
    expect(toolViewReducer(undefined, { type: null })).toEqual(0);
  });

  test('Should update state to 0 on VIEW_KEY_ADD', () => {
    expect(toolViewReducer(1, { type: a.VIEW_KEG_ADD })).toEqual(0);
  });

  test('Should update state to 1 on VIEW_KEY_DETAILS', () => {
    expect(toolViewReducer(0, { type: a.VIEW_KEG_DETAILS })).toEqual(1);
  });

  test('Should update state to 2 on VIEW_KEY_EDIT', () => {
    expect(toolViewReducer(0, { type: a.VIEW_KEG_EDIT })).toEqual(2);
  });
});
