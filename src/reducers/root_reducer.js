import { combineReducers } from 'redux';
import credentialReducer from './credentials_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  ownCredential: credentialReducer,
  currentFilter: filterReducer
});

export default rootReducer;
