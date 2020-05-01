import * as actions from './../../actions';
import * as a from './../../actions/ActionTypes';

describe('reducer actions', () => {
  // ------------ keg-list-reducer -------------
  // Test object
  const keg = {
    beer: "Dirty Dan's Pale Ale",
    brewery: 'Mnt Brewery',
    price: 3,
    aContent: 9,
    pints: 4,
    id: '1',
    createAt: 1587762467285
  };

  //ADD_KEG
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg(keg)).toEqual({
      type: a.ADD_KEG,
      beer: "Dirty Dan's Pale Ale",
      brewery: 'Mnt Brewery',
      price: 3,
      aContent: 9,
      pints: 4,
      id: '1',
      createAt: 1587762467285
    });
  });

  //DELETE_KEG
  it('delelteKey should create DELETE_KEY action', () => {
    expect(actions.deleteKeg(1)).toEqual({ type: a.DELETE_KEG, id: 1 });
  });

  //sell pint
  it('sellPint should create SELL_PINT action', () => {
    expect(actions.sellPint(1)).toEqual({ type: a.SELL_PINT, id: 1 });
  });

  // ------------- selected-list-reducer -----------
  it('changeSelected should create CHANGE_SELECTED action', () => {
    expect(actions.changeSelected(keg)).toEqual({ type: a.CHANGE_SELECTED, ...keg });
  });

  // ------------- show-modal-reducer -----------
  it('toggleModal should create SHOW_MODAL action', () => {
    expect(actions.toggleModal()).toEqual({ type: a.TOGGLE_MODAL });
  });

  // ------------- tool-view-reducer -----------
  it('viewKegAdd should create VIEW_KEG_ADD action', () => {
    expect(actions.viewKegAdd()).toEqual({ type: a.VIEW_KEG_ADD });
  });
  it('viewKegDetails should create VIEW_KEG_ADD action', () => {
    expect(actions.viewKegDetails()).toEqual({ type: a.VIEW_KEG_DETAILS });
  });
  it('viewKegEdit should create VIEW_KEG_ADD action', () => {
    expect(actions.viewKegEdit()).toEqual({ type: a.VIEW_KEG_EDIT });
  });
});
