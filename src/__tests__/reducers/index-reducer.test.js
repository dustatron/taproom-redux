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
    expect(rootReducer(defaultState, { type: null })).toEqual(defaultState);
  });
});
