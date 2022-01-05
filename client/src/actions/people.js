import * as api from '../api';
import {
  FETCH_FOLLOWERS,
  FETCH_FOLLOWING,
  REMOVE_USER_FROM_FOLLOWING,
} from '../constants/actionTypes';

export const getFollowing = (id) => async (dispatch) => {
  try {
    const { data } = await api.getFollowing(id);
    console.log(data);

    dispatch({ type: FETCH_FOLLOWING, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getFollowers = (id) => async (dispatch) => {
  try {
    const { data } = await api.getFollowers(id);

    dispatch({ type: FETCH_FOLLOWERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeUserFromFollowing = (id, friendId) => async (dispatch) => {
  try {
    const { data } = await api.removeUserFromFollowing(id, friendId);
    console.log(data);

    dispatch({ type: REMOVE_USER_FROM_FOLLOWING, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
