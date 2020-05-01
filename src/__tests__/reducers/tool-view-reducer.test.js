import toolViewReducer from '../../reducers/tool-view-reducer';
import * as a from '../../actions/ActionTypes';

describe('toolViewReducer', () => {
  test('Should return default state if no action is passed to the reducer', () => {
    expect(toolViewReducer(undefined, { type: null })).toEqual(0);
  });

  test('Should update state to 0 on VIEW_ADD', () => {
    expect(toolViewReducer(1, { type: a.VIEW_KEY_ADD })).toEqual(0);
  });
});
