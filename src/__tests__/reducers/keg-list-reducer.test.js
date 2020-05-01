import kegListReducer from '../../reducers/keg-list-reducer';
import * as a from '../../actions/ActionTypes';

describe('kegListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to kegList', () => {
    const action = {
      type: a.ADD_KEY,
      beer: "Dirty Dan's Pale Ale",
      brewery: 'Mnt Brewery',
      price: 3,
      aContent: 9,
      pints: 4,
      id: '1',
      createAt: 1587762467285
    };

    expect(kegListReducer({}, action)).toEqual(action);
  });
});
