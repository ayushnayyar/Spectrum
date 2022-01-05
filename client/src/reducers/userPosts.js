import { GET_USER_POSTS, DELETE_USER_POST } from '../constants/actionTypes';

const INITIAL_DATA = [];

export default (posts = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET_USER_POSTS:
      return action.payload;

    case DELETE_USER_POST:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};
