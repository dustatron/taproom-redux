// ------------ keg-list-reducer -------------
//takes whole object // c.addKeg(obj)
export const ADD_KEG = 'ADD_KEG';

//takes id // c.deleteKeg(id)
export const DELETE_KEG = 'DELETE_KEG';

//takes id // c.sellPint(id)
export const SELL_PINT = 'SELL_PINT';

// ------------- selected-list-reducer -----------
// takes whole object // c.changeSelected(keg)
export const CHANGE_SELECTED = 'CHANGE_SELETED';

// ------------- show-modal-reducer -----------
// switches true/false // c.toggleModal()
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

// ------------- tool-view-reducer -----------
// returns 0 // c.viewKegAdd()
export const VIEW_KEG_ADD = 'VIEW_KEG_ADD';

// returns 1 // c.viewKegDetails()
export const VIEW_KEG_DETAILS = 'VIEW_KEG_DETAILS';

// returns 2  // c.viewKegEdit()
export const VIEW_KEG_EDIT = 'VIEW_KEG_EDIT';
