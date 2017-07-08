import { combineReducers } from 'redux';
import credentialReducer from './credentials_reducer';
import mySharedReducer from './my_shared_reducer';
import sharedWithMeReducer from './shared_with_me_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  ownCredential: credentialReducer,
  myShared: mySharedReducer,
  sharedWithMe: sharedWithMeReducer,
  currentFilter: filterReducer
});

export default rootReducer;
