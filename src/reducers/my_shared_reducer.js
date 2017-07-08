import { REMOVE_CRED  } from '../actions/credential_actions';

import { merge } from 'lodash';

const defaultState = {
    1: {
       website:"youtube.com",
       username:"macklemore299",
       password_id:"(*#$2k$SSD",
       lender_user_id: "macklemore"
    },
    2: {
       website:"hulu.com",
       username:"lorenzo789",
       password_id:"23789$$SSD",
       lender_user_id: "lorenzochello"
    }
};

const mySharedReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_CRED :
      let newState = merge({},state);
      if (newState[action.id]) {
        delete newState[action.id];
      }
      return merge( {}, newState);
    default:
      return state;
  }
};

export default mySharedReducer;
