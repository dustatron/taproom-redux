import showModal from '../../reducers/show-modal-reducer';
import * as a from '../../actions/ActionTypes';

describe('showModal', () => {
  it('Should return default state if action type is passed to reducer', () => {
    expect(showModal(false, { type: null })).toEqual(false);
  });

  it('Should togggle state from false to true', () => {
    expect(showModal(false, { type: a.TOGGLE_MODAL })).toEqual(true);
  });
});
