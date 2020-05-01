import showModalReducer from '../../reducers/show-modal-reducer';
import * as a from '../../actions/ActionTypes';

describe('showModalReducer', () => {
  it('Should return default state if action type is passed to reducer', () => {
    expect(showModalReducer(false, { type: null })).toEqual(false);
  });

  it('Should togggle state from false to true', () => {
    expect(showModalReducer(false, { type: a.TOGGLE_MODAL })).toEqual(true);
  });

  it('Should togggle state from true to false', () => {
    expect(showModalReducer(true, { type: a.TOGGLE_MODAL })).toEqual(false);
  });
});
