import kegListReducer from './keg-list-reducer';
import selectedKegReducer from './selected-keg-reducer';
import showModalReducer from './show-modal-reducer';
import toolViewReducer from './tool-view-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedKeg: selectedKegReducer,
  kegList: kegListReducer,
  showModal: showModalReducer,
  toolView: toolViewReducer
});

export default rootReducer;
