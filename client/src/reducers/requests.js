import { ActionTypes } from '../actions';

const initialState = {
  fetchFollowingRequestsState: {
    requests: [],
    loading: false,
    error: null,
  },
  fetchFollowRequestsState: {
    requests: [],
    loading: false,
    error: null,
  },
  sendFollowRequestState: {
    message: '',
    loading: false,
    error: null,
  },
  acceptFollowRequestState: {
    message: '',
    loading: false,
    error: null,
  },
  declineFollowRequestState: {
    message: '',
    loading: false,
    error: null,
  },
  removeFromFollowingState: {
    message: '',
    loading: false,
    error: null,
  },
  removeFromFollowersState: {
    message: '',
    loading: false,
    error: null,
  },
  deleteFollowingRequestState: {
    message: '',
    loading: false,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    // FETCH_FOLLOWING_REQUESTS
    case ActionTypes.FETCHING_FOLLOWING_REQUESTS:
      return {
        ...state,
        fetchFollowingRequestsState: {
          ...state.fetchFollowingRequestsState,
          loading: true,
        },
      };
    case ActionTypes.FETCH_FOLLOWING_REQUESTS_SUCCESS:
      return {
        ...state,
        fetchFollowingRequestsState: {
          ...state.fetchFollowingRequestsState,
          loading: false,
          requests: action.payload,
        },
      };
    case ActionTypes.FETCH_FOLLOWING_REQUESTS_FAILURE:
      return {
        ...state,
        fetchFollowingRequestsState: {
          ...state.fetchFollowingRequestsState,
          loading: false,
          error: action.payload,
        },
      };

    // FETCH_FOLLOW_REQUESTS
    case ActionTypes.FETCHING_FOLLOW_REQUESTS:
      return {
        ...state,
        fetchFollowRequestsState: {
          ...state.fetchFollowRequestsState,
          loading: true,
        },
      };
    case ActionTypes.FETCH_FOLLOW_REQUESTS_SUCCESS:
      return {
        ...state,
        fetchFollowRequestsState: {
          ...state.fetchFollowRequestsState,
          loading: false,
          requests: action.payload,
        },
      };
    case ActionTypes.FETCH_FOLLOW_REQUESTS_FAILURE:
      return {
        ...state,
        fetchFollowRequestsState: {
          ...state.fetchFollowRequestsState,

          loading: false,
          error: action.payload,
        },
      };

    // SEND_FOLLOW_REQUEST
    case ActionTypes.SENDING_FOLLOWING_REQUEST:
      return {
        ...state,
        sendFollowRequestState: {
          ...state.sendFollowRequestState,
          loading: true,
        },
      };
    case ActionTypes.SEND_FOLLOWING_REQUEST_SUCCESS:
      return {
        ...state,
        sendFollowRequestState: {
          ...state.sendFollowRequestState,
          loading: false,
          message: action.payload,
        },
      };
    case ActionTypes.SEND_FOLLOWING_REQUEST_FAILURE:
      return {
        ...state,
        sendFollowRequestState: {
          ...state.sendFollowRequestState,
          loading: false,
          error: action.payload,
        },
      };

    // ACCEPT_FOLLOW_REQUEST
    case ActionTypes.ACCEPTING_FOLLOW_REQUEST:
      return {
        ...state,
        acceptFollowRequestState: {
          ...state.acceptFollowRequestState,
          loading: true,
        },
      };
    case ActionTypes.ACCEPT_FOLLOW_REQUEST_SUCCESS:
      return {
        ...state,
        acceptFollowRequestState: {
          ...state.acceptFollowRequestState,
          loading: false,
          message: action.payload,
        },
      };
    case ActionTypes.ACCEPT_FOLLOW_REQUEST_FAILURE:
      return {
        ...state,
        acceptFollowRequestState: {
          ...state.acceptFollowRequestState,
          loading: false,
          error: action.payload,
        },
      };

    // DECLINE_FOLLOW_REQUEST
    case ActionTypes.DECLINING_FOLLOW_REQUEST:
      return {
        ...state,
        declineFollowRequestState: {
          ...state.declineFollowRequestState,
          loading: true,
        },
      };
    case ActionTypes.DECLINE_FOLLOW_REQUEST_SUCCESS:
      return {
        ...state,
        declineFollowRequestState: {
          ...state.declineFollowRequestState,
          loading: false,
          message: action.payload,
        },
      };
    case ActionTypes.DECLINE_FOLLOW_REQUEST_FAILURE:
      return {
        ...state,
        declineFollowRequestState: {
          ...state.declineFollowRequestState,
          loading: false,
          error: action.payload,
        },
      };

    // REMOVE_FROM_FOLLOWING
    case ActionTypes.REMOVING_FROM_FOLLOWING:
      return {
        ...state,
        removeFromFollowingState: {
          ...state.removeFromFollowingState,
          loading: true,
        },
      };
    case ActionTypes.REMOVE_FROM_FOLLOWING_SUCCESS:
      return {
        ...state,
        removeFromFollowingState: {
          ...state.removeFromFollowingState,
          loading: false,
          message: action.payload,
        },
      };
    case ActionTypes.REMOVE_FROM_FOLLOWING_FAILURE:
      return {
        ...state,

        removeFromFollowingState: {
          ...state.removeFromFollowingState,
          loading: false,
          error: action.payload,
        },
      };

    // REMOVE_FROM_FOLLOWERS
    case ActionTypes.REMOVING_FROM_FOLLOWERS:
      return {
        ...state,
        removeFromFollowersState: {
          ...state.removeFromFollowersState,
          loading: true,
        },
      };
    case ActionTypes.REMOVE_FROM_FOLLOWERS_SUCCESS:
      return {
        ...state,

        removeFromFollowersState: {
          ...state.removeFromFollowersState,
          loading: false,
          message: action.payload,
        },
      };
    case ActionTypes.REMOVE_FROM_FOLLOWERS_FAILURE:
      return {
        ...state,
        removeFromFollowersState: {
          ...state.removeFromFollowersState,
          loading: false,
          error: action.payload,
        },
      };

    // DELETE_FOLLOWING_REQUEST
    case ActionTypes.DELETING_FOLLOWING_REQUEST:
      return {
        ...state,
        deleteFollowingRequestState: {
          ...state.deleteFollowingRequestState,
          loading: true,
        },
      };
    case ActionTypes.DELETE_FOLLOWING_REQUEST_SUCCESS:
      return {
        ...state,
        deleteFollowingRequestState: {
          ...state.deleteFollowingRequestState,
          loading: false,
          message: action.payload,
        },
      };
    case ActionTypes.DELETE_FOLLOWING_REQUEST_FAILURE:
      return {
        ...state,
        deleteFollowingRequestState: {
          ...state.deleteFollowingRequestState,
          loading: false,
          error: action.payload,
        },
      };

    // RESET_REQUESTS_STATE
    case ActionTypes.RESET_REQUESTS_STATE:
      return initialState;

    // DEFAULT
    default:
      return state;
  }
};
