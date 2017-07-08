import { REMOVE_CRED  } from '../actions/credential_actions';

import { merge } from 'lodash';

const defaultState = {
    1: {
       website:"netflix.com",
       username:"johndoeandchill",
       password_id:"(*#$2k$SSD",
       borrower_user_id: "thefriendofjohndoe"
    },
    2: {
       website:"play.hbogo.com",
       username:"johndoewatchesgameofthrones",
       password_id:"23789$$SSD",
       borrower_user_id: "gotfan"
    }
};

const sharedWithMeReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default sharedWithMeReducer;
