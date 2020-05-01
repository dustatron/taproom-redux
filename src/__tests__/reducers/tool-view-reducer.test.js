import toolViewReducer from '../../reducers/tool-view-reducer';
import * as a from '../../actions/ActionTypes';

describe('toolViewReducer', () => {
  test('Should return default state if no action is passed to the reducer', () => {
    expect(toolViewReducer(undefined, { type: null })).toEqual(0);
  });
});
