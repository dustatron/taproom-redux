import selectedKeg from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/ActionTypes';

describe('selectedKeg', () => {
  test('Should return default state if no action type passed to the reducer', () => {
    expect(selectedKeg({}, { type: null })).toEqual({});
  });
});
