import {createSelector} from 'reselect';
import {EVENTS_FETCHED} from '../types';


export default function events(state = {}, action = {}){
    switch(action.type){
        case EVENTS_FETCHED:
            return {...state, ...action.data}
        default:
            return state;
    }
}
// Selectors
export const eventsSelector = state => state.events;

// second selector will convert our books into an array
export const allEventsSelector = createSelector(eventsSelector, eventsHash => 
    Object.values(eventsHash)
);
