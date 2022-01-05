import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signIn = (formData, history) => async (dispatch) => {
  try {
    // Log in
    const { data } = await api.signIn(formData);
    console.log(data);
    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    // Sign Up
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};
