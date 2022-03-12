import * as api from '../api/requests';

export const requestsActionTypes = {
  FETCHING_FOLLOWING_REQUESTS: 'FETCHING_FOLLOWING_REQUESTS',
  FETCH_FOLLOWING_REQUESTS_SUCCESS: 'FETCH_FOLLOW_REQUESTS_SUCCESS',
  FETCH_FOLLOWING_REQUESTS_FAILURE: 'FETCH_FOLLOW_REQUESTS_FAILURE',
  FETCHING_FOLLOW_REQUESTS: 'FETCHING_FOLLOW_REQUESTS',
  FETCH_FOLLOW_REQUESTS_SUCCESS: 'FETCH_FOLLOW_REQUESTS_SUCCESS',
  FETCH_FOLLOW_REQUESTS_FAILURE: 'FETCH_FOLLOW_REQUESTS_FAILURE',
  SENDING_FOLLOWING_REQUEST: 'SENDING_FOLLOWING_REQUEST',
  SEND_FOLLOWING_REQUEST_SUCCESS: 'SEND_FOLLOWING_REQUEST_SUCCESS',
  SEND_FOLLOWING_REQUEST_FAILURE: 'SEND_FOLLOWING_REQUEST_FAILURE',
  ACCEPTING_FOLLOW_REQUEST: 'ACCEPTING_FOLLOW_REQUEST',
  ACCEPT_FOLLOW_REQUEST_SUCCESS: 'ACCEPT_FOLLOW_REQUEST_SUCCESS',
  ACCEPT_FOLLOW_REQUEST_FAILURE: 'ACCEPT_FOLLOW_REQUEST_FAILURE',
  DECLINING_FOLLOW_REQUEST: 'DECLINING_FOLLOW_REQUEST',
  DECLINE_FOLLOW_REQUEST_SUCCESS: 'DECLINE_FOLLOW_REQUEST_SUCCESS',
  DECLINE_FOLLOW_REQUEST_FAILURE: 'DECLINE_FOLLOW_REQUEST_FAILURE',
  REMOVING_FROM_FOLLOWING: 'REMOVING_FROM_FOLLOWING',
  REMOVE_FROM_FOLLOWING_SUCCESS: 'REMOVE_FROM_FOLLOWING_SUCCESS',
  REMOVE_FROM_FOLLOWING_FAILURE: 'REMOVE_FROM_FOLLOWING_FAILURE',
  REMOVING_FROM_FOLLOWERS: 'REMOVING_FROM_FOLLOWERS',
  REMOVE_FROM_FOLLOWERS_SUCCESS: 'REMOVE_FROM_FOLLOWERS_SUCCESS',
  REMOVE_FROM_FOLLOWERS_FAILURE: 'REMOVE_FROM_FOLLOWERS_FAILURE',
  DELETING_FOLLOWING_REQUEST: 'DELETING_FOLLOWING_REQUEST',
  DELETE_FOLLOWING_REQUEST_SUCCESS: 'DELETE_FOLLOWING_REQUEST_SUCCESS',
  DELETE_FOLLOWING_REQUEST_FAILURE: 'DELETE_FOLLOWING_REQUEST_FAILURE',
  RESET_REQUESTS_STATE: 'RESET_REQUESTS_STATE',
};

export const requestsActions = {
  // FETCH_FOLLOWING_REQUESTS
  fetchFollowingRequests: (id) => (dispatch) => {
    const request = api.getFollowingRequests(id);

    dispatch({
      type: requestsActionTypes.FETCHING_FOLLOWING_REQUESTS,
    });

    request.then(
      (response) =>
        dispatch({
          type: requestsActionTypes.FETCH_FOLLOWING_REQUESTS_SUCCESS,
          payload: response.data,
        }),
      (error) =>
        dispatch({
          type: requestsActionTypes.FETCH_FOLLOWING_REQUESTS_FAILURE,
          payload: error,
        })
    );
  },
  fetchingFollowingRequests: () => {
    return {
      type: requestsActionTypes.FETCHING_FOLLOWING_REQUESTS,
    };
  },
  fetchFollowingRequestsSuccess: (payload) => {
    return {
      type: requestsActionTypes.FETCH_FOLLOWING_REQUESTS_SUCCESS,
      payload,
    };
  },
  fetchFollowingRequestsFailure: (payload) => {
    return {
      type: requestsActionTypes.FETCH_FOLLOWING_REQUESTS_FAILURE,
      payload,
    };
  },

  // FETCH_FOLLOW_REQUESTS
  fetchFollowRequests: (id) => (dispatch) => {
    const request = api.getFollowRequests(id);

    dispatch({
      type: requestsActionTypes.FETCHING_FOLLOW_REQUESTS,
    });

    request.then(
      (response) =>
        dispatch({
          type: requestsActionTypes.FETCH_FOLLOW_REQUESTS_SUCCESS,
          payload: response.data,
        }),
      (error) =>
        dispatch({
          type: requestsActionTypes.FETCH_FOLLOW_REQUESTS_FAILURE,
          payload: error,
        })
    );
  },
  fetchingFollowRequests: () => {
    return {
      type: requestsActionTypes.FETCHING_FOLLOW_REQUESTS,
    };
  },
  fetchFollowRequestsSuccess: (payload) => {
    return {
      type: requestsActionTypes.FETCH_FOLLOW_REQUESTS_SUCCESS,
      payload,
    };
  },
  fetchFollowRequestsFailure: (payload) => {
    return {
      type: requestsActionTypes.FETCH_FOLLOW_REQUESTS_FAILURE,
      payload,
    };
  },

  // SEND_FOLLOWING_REQUEST
  sendFollowingRequest: (id, followId) => (dispatch) => {
    const request = api.sendFollowingRequest(id, followId);

    dispatch({
      type: requestsActionTypes.SENDING_FOLLOWING_REQUEST,
    });

    request.then(
      (response) =>
        dispatch({
          type: requestsActionTypes.SEND_FOLLOWING_REQUEST_SUCCESS,
          payload: response.data.message,
        }),
      (error) =>
        dispatch({
          type: requestsActionTypes.SEND_FOLLOWING_REQUEST_FAILURE,
          payload: error,
        })
    );
  },
  sendingFollowingRequest: () => {
    return {
      type: requestsActionTypes.SENDING_FOLLOWING_REQUEST,
    };
  },
  sendFollowingRequestSuccess: (payload) => {
    return {
      type: requestsActionTypes.SEND_FOLLOWING_REQUEST_SUCCESS,
      payload,
    };
  },
  sendFollowingRequestFailure: (payload) => {
    return {
      type: requestsActionTypes.SEND_FOLLOWING_REQUEST_FAILURE,
      payload,
    };
  },

  // ACCEPT_FOLLOWING_REQUEST
  acceptFollowRequest: (id, followRequestSender) => (dispatch) => {
    const request = api.acceptFollowRequest(id, followRequestSender);

    dispatch({
      type: requestsActionTypes.ACCEPTING_FOLLOW_REQUEST,
    });

    request.then(
      (response) =>
        dispatch({
          type: requestsActionTypes.ACCEPT_FOLLOW_REQUEST_SUCCESS,
          payload: response.data.message,
        }),
      (error) =>
        dispatch({
          type: requestsActionTypes.ACCEPT_FOLLOW_REQUEST_FAILURE,
          payload: error,
        })
    );
  },
  acceptingFollowingRequest: () => {
    return {
      type: requestsActionTypes.ACCEPTING_FOLLOW_REQUEST,
    };
  },
  acceptFollowingRequestSuccess: (payload) => {
    return {
      type: requestsActionTypes.ACCEPT_FOLLOW_REQUEST_SUCCESS,
      payload,
    };
  },
  acceptFollowingRequestFailure: (payload) => {
    return {
      type: requestsActionTypes.ACCEPT_FOLLOW_REQUEST_FAILURE,
      payload,
    };
  },

  // DECLINE_FOLLOWING_REQUEST
  declineFollowingRequest: (id, followRequestSender) => (dispatch) => {
    const request = api.declineFollowRequest(id, followRequestSender);

    dispatch({
      type: requestsActionTypes.DECLINING_FOLLOW_REQUEST,
    });

    request.then(
      (response) =>
        dispatch({
          type: requestsActionTypes.DECLINE_FOLLOW_REQUEST_SUCCESS,
          payload: response.data.message,
        }),
      (error) =>
        dispatch({
          type: requestsActionTypes.DECLINE_FOLLOW_REQUEST_FAILURE,
          payload: error,
        })
    );
  },
  decliningFollowingRequest: () => {
    return {
      type: requestsActionTypes.DECLINING_FOLLOW_REQUEST,
    };
  },
  declineFollowingRequestSuccess: (payload) => {
    return {
      type: requestsActionTypes.DECLINE_FOLLOW_REQUEST_SUCCESS,
      payload,
    };
  },
  declineFollowingRequestFailure: (payload) => {
    return {
      type: requestsActionTypes.DECLINE_FOLLOW_REQUEST_FAILURE,
      payload,
    };
  },

  // REMOVE_FROM_FOLLOWING
  removeFromFollowing: (id, removeUser) => (dispatch) => {
    const request = api.removeFromFollowing(id, removeUser);

    dispatch({
      type: requestsActionTypes.REMOVING_FROM_FOLLOWING,
    });

    request.then(
      (response) =>
        dispatch({
          type: requestsActionTypes.REMOVE_FROM_FOLLOWING_SUCCESS,
          payload: response.data.message,
        }),
      (error) =>
        dispatch({
          type: requestsActionTypes.REMOVE_FROM_FOLLOWING_FAILURE,
          payload: error,
        })
    );
  },
  removingFromFollowing: () => {
    return {
      type: requestsActionTypes.REMOVING_FROM_FOLLOWING,
    };
  },
  removeFromFollowingSuccess: (payload) => {
    return {
      type: requestsActionTypes.REMOVE_FROM_FOLLOWING_SUCCESS,
      payload,
    };
  },
  removeFromFollowingFailure: (payload) => {
    return {
      type: requestsActionTypes.REMOVE_FROM_FOLLOWING_FAILURE,
      payload,
    };
  },

  // REMOVE_FROM_FOLLOWERS
  removeFromFollowers: (id, removeUser) => (dispatch) => {
    const request = api.removeFromFollowers(id, removeUser);

    dispatch({
      type: requestsActionTypes.REMOVING_FROM_FOLLOWERS,
    });

    request.then(
      (response) =>
        dispatch({
          type: requestsActionTypes.REMOVE_FROM_FOLLOWERS_SUCCESS,
          payload: response.data.message,
        }),
      (error) =>
        dispatch({
          type: requestsActionTypes.REMOVE_FROM_FOLLOWERS_FAILURE,
          payload: error,
        })
    );
  },
  removingFromFollowers: () => {
    return {
      type: requestsActionTypes.REMOVING_FROM_FOLLOWERS,
    };
  },
  removeFromFollowersSuccess: (payload) => {
    return {
      type: requestsActionTypes.REMOVE_FROM_FOLLOWERS_SUCCESS,
      payload,
    };
  },
  removeFromFollowersFailure: (payload) => {
    return {
      type: requestsActionTypes.REMOVE_FROM_FOLLOWERS_FAILURE,
      payload,
    };
  },

  // DELETE_FOLLOWING_REQUEST
  deleteFollowingRequest: (id, removeRequestToUser) => (dispatch) => {
    const request = api.deleteFollowingRequest(id, removeRequestToUser);

    dispatch({
      type: requestsActionTypes.DELETING_FOLLOWING_REQUEST,
    });

    request.then(
      (response) =>
        dispatch({
          type: requestsActionTypes.DELETE_FOLLOWING_REQUEST_SUCCESS,
          payload: response.data.message,
        }),
      (error) =>
        dispatch({
          type: requestsActionTypes.DELETE_FOLLOWING_REQUEST_FAILURE,
          payload: error,
        })
    );
  },
  deletingFollowingRequest: () => {
    return {
      type: requestsActionTypes.DELETING_FOLLOWING_REQUEST,
    };
  },
  deleteFollowingRequestSuccess: (payload) => {
    return {
      type: requestsActionTypes.DELETE_FOLLOWING_REQUEST_SUCCESS,
      payload,
    };
  },
  deleteFollowingRequestFailure: (payload) => {
    return {
      type: requestsActionTypes.DELETE_FOLLOWING_REQUEST_FAILURE,
      payload,
    };
  },

  // RESET_REQUESTS_STATE
  resetRequestsState: () => {
    return {
      type: requestsActionTypes.RESET_REQUESTS_STATE,
    };
  },
};
