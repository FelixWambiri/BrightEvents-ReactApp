import { SEARCH_STARTED, EVENTS_FETCHED, REQUEST_FAILED } from "../types";

export default (loading=false,action) =>{
    switch (action.type) {
        case SEARCH_STARTED:
            return true;
        case EVENTS_FETCHED:
        case REQUEST_FAILED:
            return false;
        default:
            return loading;
    }
} 