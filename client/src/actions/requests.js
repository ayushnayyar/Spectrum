import * as api from '../api/requests';

export const requestsActionTypes = {
  FETCHING_FOLLOWING_REQUESTS: 'FETCHING_FOLLOWING_REQUESTS',
  FETCH_FOLLOWING_REQUESTS_SUCCESS: 'FETCH_FOLLOWING_REQUESTS_SUCCESS',
  FETCH_FOLLOWING_REQUESTS_FAILURE: 'FETCH_FOLLOW_REQUESTS_FAILURE',
  FETCHING_FOLLOW_REQUESTS: 'FETCHING_FOLLOW_REQUESTS',
  FETCH_FOLLOW_REQUESTS_SUCCESS: 'FETCH_FOLLOW_REQUESTS_SUCCESS',
  FETCH_FOLLOW_REQUESTS_FAILURE: 'FETCH_FOLLOW_REQUESTS_FAILURE',
  FETCHING_FOLLOWING: 'FETCHING_FOLLOWING',
  FETCH_FOLLOWING_SUCCESS: 'FETCH_FOLLOWING_SUCCESS',
  FETCH_FOLLOWING_FAILURE: 'FETCH_FOLLOWING_FAILURE',
  FETCHING_FOLLOWERS: 'FETCHING_FOLLOWERS',
  FETCH_FOLLOWERS_SUCCESS: 'FETCH_FOLLOWERS_SUCCESS',
  FETCH_FOLLOWERS_FAILURE: 'FETCH_FOLLOWERS_FAILURE',
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

    dispatch(requestsActions.fetchingFollowingRequests());

    request.then(
      (response) =>
        dispatch(requestsActions.fetchFollowingRequestsSuccess(response)),
      (error) => dispatch(requestsActions.fetchFollowingRequestsFailure(error))
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

    dispatch(requestsActions.fetchingFollowRequests());

    request.then(
      (response) => {
        dispatch(requestsActions.fetchFollowRequestsSuccess(response.data));
      },
      (error) => dispatch(requestsActions.fetchFollowRequestsFailure(error))
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

  // FETCH_FOLLOWING
  fetchFollowing: (id) => (dispatch) => {
    const request = api.getFollowing(id);

    dispatch(requestsActions.fetchingFollowing());

    request.then(
      (response) =>
        dispatch(requestsActions.fetchFollowingSuccess(response.data)),
      (error) => dispatch(requestsActions.fetchFollowingFailure(error))
    );
  },
  fetchingFollowing: () => {
    return {
      type: requestsActionTypes.FETCHING_FOLLOWING,
    };
  },
  fetchFollowingSuccess: (payload) => {
    return {
      type: requestsActionTypes.FETCH_FOLLOWING_SUCCESS,
      payload,
    };
  },
  fetchFollowingFailure: (payload) => {
    return {
      type: requestsActionTypes.FETCH_FOLLOWING_FAILURE,
      payload,
    };
  },

  // FETCH_FOLLOWERS
  fetchFollowers: (id) => (dispatch) => {
    const request = api.getFollowers(id);

    dispatch(requestsActions.fetchingFollowers());

    request.then(
      (response) =>
        dispatch(requestsActions.fetchFollowersSuccess(response.data)),
      (error) => dispatch(requestsActions.fetchFollowersFailure(error))
    );
  },
  fetchingFollowers: () => {
    return {
      type: requestsActionTypes.FETCHING_FOLLOWERS,
    };
  },
  fetchFollowersSuccess: (payload) => {
    return {
      type: requestsActionTypes.FETCH_FOLLOWERS_SUCCESS,
      payload,
    };
  },
  fetchFollowersFailure: (payload) => {
    return {
      type: requestsActionTypes.FETCH_FOLLOWERS_FAILURE,
      payload,
    };
  },

  // SEND_FOLLOWING_REQUEST
  sendFollowingRequest: (id, followId) => (dispatch) => {
    const request = api.sendFollowingRequest(id, followId);

    dispatch(requestsActions.sendingFollowingRequest());

    request.then(
      (response) =>
        dispatch(
          requestsActions.sendFollowingRequestSuccess(response.data.message)
        ),
      (error) => dispatch(requestsActions.sendFollowingRequestFailure(error))
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

    dispatch(requestsActions.acceptingFollowRequest());

    request.then(
      (response) => {
        dispatch(
          requestsActions.acceptFollowRequestSuccess(response.data.message)
        );
        dispatch(requestsActions.fetchFollowRequests(id));
      },
      (error) => dispatch(requestsActions.acceptFollowRequestFailure(error))
    );
  },
  acceptingFollowRequest: () => {
    return {
      type: requestsActionTypes.ACCEPTING_FOLLOW_REQUEST,
    };
  },
  acceptFollowRequestSuccess: (payload) => {
    return {
      type: requestsActionTypes.ACCEPT_FOLLOW_REQUEST_SUCCESS,
      payload,
    };
  },
  acceptFollowRequestFailure: (payload) => {
    return {
      type: requestsActionTypes.ACCEPT_FOLLOW_REQUEST_FAILURE,
      payload,
    };
  },

  // DECLINE_FOLLOWING_REQUEST
  declineFollowRequest: (id, followRequestSender) => (dispatch) => {
    const request = api.declineFollowRequest(id, followRequestSender);

    dispatch(requestsActions.decliningFollowRequest());

    request.then(
      (response) => {
        dispatch(
          requestsActions.declineFollowRequestSuccess(response.data.message)
        );
        dispatch(requestsActions.fetchFollowRequests(id));
      },
      (error) => dispatch(requestsActions.declineFollowRequestFailure(error))
    );
  },
  decliningFollowRequest: () => {
    return {
      type: requestsActionTypes.DECLINING_FOLLOW_REQUEST,
    };
  },
  declineFollowRequestSuccess: (payload) => {
    return {
      type: requestsActionTypes.DECLINE_FOLLOW_REQUEST_SUCCESS,
      payload,
    };
  },
  declineFollowRequestFailure: (payload) => {
    return {
      type: requestsActionTypes.DECLINE_FOLLOW_REQUEST_FAILURE,
      payload,
    };
  },

  // REMOVE_FROM_FOLLOWING
  removeFromFollowing: (id, removeUser) => (dispatch) => {
    const request = api.removeFromFollowing(id, removeUser);

    dispatch(requestsActions.removingFromFollowing());

    request.then(
      (response) =>
        dispatch(
          requestsActions.removeFromFollowingSuccess(response.data.message)
        ),
      (error) => dispatch(requestsActions.removeFromFollowingFailure(error))
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

    dispatch(requestsActions.removingFromFollowers());

    request.then(
      (response) =>
        dispatch(
          requestsActions.removeFromFollowersSuccess(response.data.message)
        ),
      (error) => dispatch(requestsActions.removeFromFollowersFailure(error))
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

    dispatch(requestsActions.deletingFollowingRequest());

    request.then(
      (response) =>
        dispatch(
          requestsActions.deleteFollowingRequestSuccess(response.data.message)
        ),
      (error) => dispatch(requestsActions.deleteFollowingRequestFailure(error))
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
