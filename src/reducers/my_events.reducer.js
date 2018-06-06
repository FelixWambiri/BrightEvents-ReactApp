import {MY_EVENTS_FETCHED, EVENT_DELETED} from '../types';


export default function myEvents(events = [], action = {}){
    switch(action.type){
        case MY_EVENTS_FETCHED:
            return action.data
        case EVENT_DELETED:
            return events.filter(event=>event.id !== action.id)
        default:
            return events;
    }
}