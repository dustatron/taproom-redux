import kegListReducer from '../../reducers/keg-list-reducer';
import * as a from '../../actions/ActionTypes';

describe('kegListReducer', () => {
  const kegData = {
    beer: 'beer',
    brewery: 'brew',
    price: 1,
    aContent: 2,
    pints: 3,
    id: 4,
    createAt: 1587762467285
  };

  const currentState = {
    [1]: {
      beer: "Real DeadMan's Ale",
      brewery: 'Pelican Brewery',
      price: 7,
      aContent: 7,
      pints: 11,
      id: '1',
      createAt: 1587762429777
    },
    [2]: {
      beer: 'Golden Girls Pale Ale',
      brewery: 'St. Olaf Brewery',
      price: 10,
      aContent: 2,
      pints: 124,
      id: '2',
      createAt: 1587762424204
    }
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to kegList', () => {
    const { beer, brewery, price, aContent, pints, id, createAt } = kegData;
    const action = {
      type: a.ADD_KEY,
      beer,
      brewery,
      price,
      aContent,
      pints,
      id,
      createAt
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        beer: 'beer',
        brewery: 'brew',
        price: 1,
        aContent: 2,
        pints: 3,
        id: 4,
        createAt: 1587762467285
      }
    });
  });

  test('Should remove keg from kegList', () => {
    const action = { type: a.DELETE_KEY, id: 1 };
    const updatedState = {
      '2': {
        beer: 'Golden Girls Pale Ale',
        brewery: 'St. Olaf Brewery',
        price: 10,
        aContent: 2,
        pints: 124,
        id: '2',
        createAt: 1587762424204
      }
    };

    expect(kegListReducer(currentState, action)).toEqual(updatedState);
  });

  test('Should update pints count of a single keg in kegList', () => {
    const action = {
      type: a.SELL_PINT,
      id: 1
    };

    const updatedState = {
      [1]: {
        beer: "Real DeadMan's Ale",
        brewery: 'Pelican Brewery',
        price: 7,
        aContent: 7,
        pints: 10,
        id: '1',
        createAt: 1587762429777
      },
      [2]: {
        beer: 'Golden Girls Pale Ale',
        brewery: 'St. Olaf Brewery',
        price: 10,
        aContent: 2,
        pints: 124,
        id: '2',
        createAt: 1587762424204
      }
    };

    expect(kegListReducer(currentState, action)).toEqual(updatedState);
  });
});
