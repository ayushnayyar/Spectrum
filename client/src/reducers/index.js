import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import requestsReducer from './requests';
import people from './people';
import userPosts from './userPosts';
import rewards from './rewards';

export const appReducer = combineReducers({
  posts,
  auth,
  requestsReducer,
  people,
  userPosts,
  rewards,
});

export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
