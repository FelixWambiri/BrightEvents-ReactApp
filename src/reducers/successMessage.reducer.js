import { USER_LOGGED_IN, USER_LOGGED_OUT, CLEAR_MESSAGE } from '../types';

export default (message = '', action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return 'You have logged in successfully';
    case USER_LOGGED_OUT:
      return 'You have logged out successfully';
    case CLEAR_MESSAGE:
      return '';
    default:
      return message;
  }
};
