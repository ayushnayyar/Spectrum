import { GET_REWARDS, RESET } from '../constants/actionTypes';

const INITIAL_DATA = 0;

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET_REWARDS:
      return action.payload;

    case RESET:
      return INITIAL_DATA;

    default:
      return state;
  }
};
