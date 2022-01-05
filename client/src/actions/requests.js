import {
  SEND_FRIEND_REQUEST,
  FETCH_FRIEND_REQUESTS,
  ACCEPT_FRIEND_REQUEST,
  DECLINE_FRIEND_REQUEST,
} from '../constants/actionTypes';
import * as api from '../api';

export const getFriendRequests = (id) => async (dispatch) => {
  try {
    const { data } = await api.getFriendRequests(id);

    dispatch({ type: FETCH_FRIEND_REQUESTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const sendFriendRequest = (id, friendId) => async (dispatch) => {
  try {
    const { data } = await api.sendFriendRequest(id, friendId);

    dispatch({ type: SEND_FRIEND_REQUEST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const acceptFriendRequest = (id, friendId) => async (dispatch) => {
  try {
    const { data } = await api.acceptFriendRequest(id, friendId);
    const request = { name: data.name, id: friendId };

    dispatch({ type: ACCEPT_FRIEND_REQUEST, payload: request });
  } catch (error) {
    console.log(error.message);
  }
};

export const declineFriendRequest = (id, friendId) => async (dispatch) => {
  try {
    const { data } = await api.declineFriendRequest(id, friendId);
    const request = { name: data.name, id: friendId };

    dispatch({ type: DECLINE_FRIEND_REQUEST, payload: request });
  } catch (error) {
    console.log(error.message);
  }
};
