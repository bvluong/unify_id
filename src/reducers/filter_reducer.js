import { RECEIVE_FILTER } from '../actions/filter_actions';

const notificationReducer = (state = {filter: "all"}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default notificationReducer;
