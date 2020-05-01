import showModal from '../../reducers/show-modal-reducer';
import * as a from '../../actions/ActionTypes';

describe('showModal', () => {
  it('Should return default state if action type is passed to reducer', () => {
    expect(showModal({}, { type: null })).toEqual({});
  });
});
