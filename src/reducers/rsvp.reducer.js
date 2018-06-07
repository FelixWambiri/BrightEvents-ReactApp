import { RESERVATION_MADE } from '../types';

export default (message = '', action) => {
  switch (action.type) {
    case RESERVATION_MADE:
      return action.id;
    default:
      return message;
  }
};
