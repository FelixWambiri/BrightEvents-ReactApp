import api from '../api';
import {normalize} from 'normalizr';
import {EVENTS_FETCHED} from '../types';
import {eventSchema} from '../schemas';



const eventsFetched = (data) => ({
    type: EVENTS_FETCHED,
    data
});

export const addEvent = (data) => (dispatch) => api.user.addEvent(data);

export const fetchEvents = () => (dispatch) => api.events.fetchAll().then(events => dispatch(eventsFetched(events)));