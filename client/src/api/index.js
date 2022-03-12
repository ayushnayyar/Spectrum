import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

API.defaults.headers = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
};

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export default API;

export const fetchPosts = () => {
  return API.get('/posts');
};

export const getUserPosts = (id) => API.post(`/posts/${id}`);

export const createPost = (post) => API.post('/posts', post);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);

// export const getUser = (id) => API.get(`/user/${id}`);

export const getFriendRequests = (id) =>
  API.post(`/friendrequest/${id}/getfriendrequests`);

export const sendFriendRequest = (id, friendId) =>
  API.patch(`/friendrequest/${id}/sendfriendrequest`, { friendId: friendId });

export const acceptFriendRequest = (id, friendId) =>
  API.patch(`/friendrequest/${id}/acceptfriendrequest`, { friendId: friendId });

export const declineFriendRequest = (id, friendId) =>
  API.patch(`/friendrequest/${id}/declinefriendrequest`, {
    friendId: friendId,
  });

export const removeUserFromFollowing = (id, removeUserId) =>
  API.patch(`/friendrequest/${id}/removeuserfromfollowing`, {
    removeUserId: removeUserId,
  });

export const getFollowing = (id) => API.post(`/people/${id}/getfollowing`);

export const getFollowers = (id) => API.post(`/people/${id}/getfollowers`);

export const getRewards = (id) => API.get(`/rewards/${id}`);

export const searchUsers = (searchTerm, limit) =>
  API.post(`/search/users?searchterm=${searchTerm}&limit=${limit}`);
