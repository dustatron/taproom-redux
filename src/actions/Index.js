import * as a from './ActionTypes';
// ------------ keg-list-reducer -------------
export const addKeg = (keg) => {
  const { beer, brewery, price, aContent, pints, id, createAt } = keg;
  return {
    type: a.ADD_KEG,
    beer,
    brewery,
    price,
    aContent,
    pints,
    id,
    createAt
  };
};

export const deleteKeg = (id) => ({
  type: a.DELETE_KEG,
  id
});

export const sellPint = (id) => ({
  type: a.SELL_PINT,
  id
});

// ------------- selected-list-reducer -----------
export const changeSelected = (keg) => {
  const { beer, brewery, price, aContent, pints, id, createAt } = keg;
  return {
    type: a.CHANGE_SELECTED,
    beer,
    brewery,
    price,
    aContent,
    pints,
    id,
    createAt
  };
};

// ------------- show-modal-reducer -----------
export const toggleModal = () => ({ type: a.TOGGLE_MODAL });

// ------------- tool-view-reducer -----------
export const viewKegAdd = () => ({ type: a.VIEW_KEG_ADD });
export const viewKegDetails = () => ({ type: a.VIEW_KEG_DETAILS });
export const viewKegEdit = () => ({ type: a.VIEW_KEG_EDIT });
