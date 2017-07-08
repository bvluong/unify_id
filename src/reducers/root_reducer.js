import { combineReducers } from 'redux';
import credentialReducer from './credentials_reducer';

const rootReducer = combineReducers({
  ownCredential: credentialReducer
});

export default rootReducer;
