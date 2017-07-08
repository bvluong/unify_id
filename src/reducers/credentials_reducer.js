import { REMOVE_CRED  } from '../actions/credential_actions';

import { merge } from 'lodash';

const defaultState = {
    1: {
           website:"google.com",
           username:"johndoe@gmail.com",
           password_id:"#jknkjndsjk$SSD"
        },
    2:  {
         website:"facebook.com",
         username:"johndoe@gmail.com",
         password_id:"nnjnnnc#D"
      },
    3:  {
         website:"reddit.com",
         username:"thejohndoe",
         password_id:"#)_2-==23D"
      },
    4:  {
         website:"wellsfargo.com",
         username:"johndoebanks",
         password_id:"iuh!@@22"
      },
    5:  {
         website:"netflix.com",
         username:"johndoeandchill",
         password_id:"(*#$2k$SSD"
      },
    6: {
         website:"play.hbogo.com",
         username:"johndoewatchesgameofthrones",
         password_id:"23789$$SSD"
      }
};

const credentialReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REMOVE_CRED :
      let newState = merge({},state);
      delete newState[action.id];
      return merge( {}, newState);
    default:
      return state;
  }
};

export default credentialReducer;
