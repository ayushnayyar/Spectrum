import { GET_REWARDS } from '../constants/actionTypes';
import * as api from '../api';

export const getRewards = (id) => async (dispatch) => {
  try {
    const { data } = await api.getRewards(id);

    dispatch({ type: GET_REWARDS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
