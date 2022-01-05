import * as api from '../api';
import { GET_USER_POSTS, DELETE_USER_POST } from '../constants/actionTypes';

export const getUserPosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUserPosts(id);
    console.log(data);

    dispatch({ type: GET_USER_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_POST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
