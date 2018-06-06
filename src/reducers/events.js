import { EVENTS_FETCHED, EVENT_DELETED, ALL_EVENTS_FETCHED, RESERVATION_MADE, SEARCH_RESULTS } from '../types';


export default function events(events = [], action = {}) {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.data;
    case ALL_EVENTS_FETCHED:
      return action.data;
    case EVENT_DELETED:
      return events.filter(event => event.id !== action.id);
    case RESERVATION_MADE:
      return action.data;
    case SEARCH_RESULTS:
      return action.data;
    default:
      return events;
  }
}

