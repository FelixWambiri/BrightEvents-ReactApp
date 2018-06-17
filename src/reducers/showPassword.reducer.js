import { TOGGLE_PASSWORD } from '../types';

export default (open = false, action) => {
  switch (action.type) {
    case TOGGLE_PASSWORD:
      return !open;
    default:
      return open;
  }
};
