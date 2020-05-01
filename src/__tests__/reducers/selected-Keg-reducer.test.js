import selectedKeg from '../../reducers/selected-keg-reducer';
import * as a from '../../actions/ActionTypes';

describe('selectedKeg', () => {
  test('Should return default state if no action type passed to the reducer', () => {
    expect(selectedKeg({}, { type: null })).toEqual({});
  });

  test('Should successfully update selected key', () => {
    const action = {
      type: a.CHANGE_SELECTED,
      beer: "Real DeadMan's Ale",
      brewery: 'Pelican Brewery',
      price: 7,
      aContent: 7,
      pints: 11,
      id: '2',
      createAt: 1587762429777
    };

    expect(selectedKeg({}, action)).toEqual({
      beer: "Real DeadMan's Ale",
      brewery: 'Pelican Brewery',
      price: 7,
      aContent: 7,
      pints: 11,
      id: '2',
      createAt: 1587762429777
    });
  });
});
