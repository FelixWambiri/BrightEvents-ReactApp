import { RESERVATION_MADE_DISPLAYED } from '../types';

export default function guests(guests = [], action = {}) {
  switch (action.type) {
   case RESERVATION_MADE_DISPLAYED:
      return action.data;
    default:
      return guests;
  }
}
