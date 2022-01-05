import {
  FETCH_FRIEND_REQUESTS,
  ACCEPT_FRIEND_REQUEST,
  DECLINE_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST,
  RESET,
} from '../constants/actionTypes';

export default (requests = [], action) => {
  switch (action.type) {
    case FETCH_FRIEND_REQUESTS:
      return action.payload;

    case ACCEPT_FRIEND_REQUEST:
    case DECLINE_FRIEND_REQUEST:
      return requests.filter((request) => {
        request.id !== action.payload.id
          ? { ...request, id: action.payload.id }
          : request;
      });

    case SEND_FRIEND_REQUEST:
      return requests;

    case RESET:
      return [];

    default:
      return requests;
  }
};
