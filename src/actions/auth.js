import { USER_LOGGED_IN, USER_LOGGED_OUT, TOGGLE_PASSWORD, CLEAR_MESSAGE } from '../types';
import api from '../api';
import { requestFailed } from './api.actions';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const userLoggedOut = user => ({
  type: USER_LOGGED_OUT,
});


export const login = credentials => dispatch =>
  api.user.login(credentials).then((user) => {
    const { token } = user.data;
    localStorage.brighteventstoken = token;
    dispatch(userLoggedIn(token));
  });

export const logout = () => (dispatch) => {
  localStorage.removeItem('brighteventstoken');
  dispatch(userLoggedOut());
};
export const resetPasswordRequest = email => () =>
  api.user.resetPasswordRequest(email);

export const validateToken = token => () =>
  api.user.validateToken(token);

export const resetPassword = data => () =>
  api.user.resetPassword(data);

export const togglePassword = open => ({
  type: TOGGLE_PASSWORD,
  open,
});

