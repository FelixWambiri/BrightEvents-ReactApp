import { REQUEST_STARTED, REQUEST_FAILED, REQUEST_SUCCESS, ALL_EVENTS_FETCHED, EVENTS_FETCHED, EVENT_FETCHED, RESERVATION_MADE, RESERVATION_MADE_DISPLAYED, MY_EVENTS_FETCHED } from '../types';

export default (loading = false, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return true;
    case REQUEST_FAILED:
    case REQUEST_SUCCESS:
    case EVENTS_FETCHED:
    case EVENT_FETCHED:
    case ALL_EVENTS_FETCHED:
    case RESERVATION_MADE:
    case MY_EVENTS_FETCHED:
    case RESERVATION_MADE_DISPLAYED:
      return false;
    default:
      return loading;
  }
};
