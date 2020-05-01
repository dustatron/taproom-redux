import { createStore } from 'redux';
import * as a from '../../actions/ActionTypes';
//all reducers
import selectedKeg from '../../reducers/selected-keg-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import showModalReducer from '../../reducers/show-modal-reducer';
import toolViewReducer from '../../reducers/tool-view-reducer';
//root reducer
import rootReducer from '../../reducers/index';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  let action;
  let defaultState = {
    selectedKeg: {},
    kegList: {},
    showModal: false,
    toolView: 0
  };
  test('Should return default state if no type is recognized', () => {
    expect(rootReducer(undefined, { type: null })).toEqual(defaultState);
  });

  test('Check that modified state of kegList matches rootReducer', () => {
    action = {
      type: a.ADD_KEG,
      beer: "Dirty Dan's Pale Ale",
      brewery: 'Mnt Brewery',
      price: 3,
      aContent: 9,
      pints: 4,
      id: '1',
      createAt: 1587762467285
    };
    store.dispatch(action);
    expect(store.getState().kegList).toEqual(kegListReducer(undefined, action));
  });
});
