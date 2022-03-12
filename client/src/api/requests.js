import API from './index';

const requestUrl = '/requests';

export const getFollowingRequests = (id) =>
  API.get(`${requestUrl}/${id}/get-following-requests`);

export const getFollowRequests = (id) =>
  API.get(`${requestUrl}/${id}/get-follow-requests`);

export const getFollowing = (id) =>
  API.get(`${requestUrl}/${id}/get-following`);

export const getFollowers = (id) =>
  API.get(`${requestUrl}/${id}/get-followers`);

export const sendFollowingRequest = (id, followId) =>
  API.patch(`${requestUrl}/${id}/send-following-request`, {
    followId: followId,
  });

export const acceptFollowRequest = (id, acceptRequestId) =>
  API.patch(`${requestUrl}/${id}/accept-follow-request`, {
    followRequestSender: acceptRequestId,
  });

export const declineFollowRequest = (id, declineRequestId) =>
  API.patch(`${requestUrl}/${id}/decline-follow-request`, {
    followRequestSender: declineRequestId,
  });

export const removeFromFollowing = (id, removeUserId) =>
  API.patch(`${requestUrl}/${id}/remove-from-following`, {
    removeUser: removeUserId,
  });

export const removeFromFollowers = (id, removeUserId) =>
  API.patch(`${requestUrl}/${id}/remove-from-followers`, {
    removeUser: removeUserId,
  });

export const deleteFollowingRequest = (id, removeRequestToUser) =>
  API.patch(`${requestUrl}/${id}/remove-from-following`, {
    removeRequestToUser: removeRequestToUser,
  });
