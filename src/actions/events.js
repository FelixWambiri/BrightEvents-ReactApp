import api from '../api';
import {normalize} from 'normalizr';
import {EVENTS_FETCHED} from '../types';
import {eventSchema} from '../schemas';



const eventsFetched = (data) => ({
    type: EVENTS_FETCHED,
    data
});

const requestFailed = error =>({type:"REQUEST_FAILED"})

export const eventDeleted = ()=>({type:"EVENT_DELETED"})



export const addEvent = (data) => (dispatch) => api.user.addEvent(data);

export const fetchEvents = () => (dispatch) => api.events.fetchAll().then(events => dispatch(eventsFetched(events)));

export const deleteEvent = (id)=> {
    return dispatch =>{
        return api.events.delete(id).then(()=>dispatch(eventDeleted())).catch(error=>dispatch(error.message));
    }
}