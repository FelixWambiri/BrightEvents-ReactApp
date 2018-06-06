import api from '../api';
import { requestStarted } from './api.actions';

export const signup = data => (dispatch) => {
  dispatch(requestStarted());
  return api.user.signup(data);
};

