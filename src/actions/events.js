import api from '../api';
import { EVENTS_FETCHED, EVENT_DELETED, EVENT_FETCHED, ALL_EVENTS_FETCHED, EVENT_UPDATED, RESERVATION_MADE, RESERVATION_MADE_DISPLAYED, SEARCH_RESULTS, SEARCH_STARTED, MY_EVENTS_FETCHED } from '../types';
import { requestStarted, requestFailed } from './api.actions';


export const eventsFetched = data => ({
  type: EVENTS_FETCHED,
  data,
});

export const myEventsFetched = data => ({
  type: MY_EVENTS_FETCHED,
  data,
});

export const allEventsFetched = data => ({
  type: ALL_EVENTS_FETCHED,
  data,
});

export const eventUpdated = event => ({
  type: EVENT_UPDATED,
  event,
});

export const singleEventFetched = event => ({
  type: EVENT_FETCHED,
  event,
});

export const eventDeleted = id => ({
  type: EVENT_DELETED,
  id,
});

export const reservationMade = id => ({
  type: RESERVATION_MADE,
  id,
});

export const reservationMadeDisplayed = data => ({
  type: RESERVATION_MADE_DISPLAYED,
  data,
});

const searchStarted = () => ({ type: SEARCH_STARTED });

const searchResults = events => ({
  type: EVENTS_FETCHED,
  events,
});

export const fetchEvent = id => (dispatch) => {
  dispatch(requestStarted());
  return api.events.fetchSingle(id).then(event => dispatch(singleEventFetched(event))).catch(error => dispatch(requestFailed('oh hnoodfas')));
};


export const addEvent = data => dispatch => api.user.addEvent(data);

export const updateEvent = (id, data) => (dispatch) => {
  dispatch(requestStarted());
  return api.events.updateEvent(id, data).then((res) => {
    dispatch(singleEventFetched(res.data.event));
    return res;
  });
};

export const fetchEvents = () => (dispatch) => {
  dispatch(requestStarted());
  return api.events.fetchAll().then(events => dispatch(myEventsFetched(events))).catch(error => dispatch(requestFailed(error.message)));
};

export const fetchAllEvents = () => (dispatch) => {
  dispatch(requestStarted());
  return api.events.fetchAllEvents().then(events => dispatch(allEventsFetched(events))).catch(error => dispatch(requestFailed(error)));
};

export const deleteEvent = id => dispatch => api.events.delete(id).then(() => dispatch(eventDeleted(id))).catch(error => dispatch(requestFailed(error.message)));

export const makeReservation = id => (dispatch) => {
  dispatch(requestStarted());
  return api.events.makeReservation(id).then(event => dispatch(reservationMade(id))).catch(error => dispatch(requestFailed('oh hnoodfas')));
};

export const showReservations = id => (dispatch) => {
  dispatch(requestStarted());
  return api.events.showReservations(id).then(event => dispatch(reservationMadeDisplayed(event))).catch(error => dispatch(requestFailed('oh hnoodfas')));
};

export const searchEvents = query => (dispatch) => {
  dispatch(searchStarted());
  return api.events.searchEvents(query).then((events) => {
    dispatch(eventsFetched(events));
    return events;
  }).catch((error) => {
    dispatch(requestFailed(error));
    return error;
  });
};
