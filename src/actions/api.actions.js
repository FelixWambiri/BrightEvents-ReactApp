import { REQUEST_STARTED, REQUEST_FAILED, REQUEST_SUCCESS } from '../types';

export const requestStarted = () => ({
  type: REQUEST_STARTED,
});
export const requestFailed = error => ({
  type: REQUEST_FAILED,
  error,
});
export const requestSuccess = () => ({
  type: REQUEST_SUCCESS,
});
