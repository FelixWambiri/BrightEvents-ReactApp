import { EVENT_FETCHED } from "../types";

export default (event={},action) =>{
    switch (action.type) {
        case EVENT_FETCHED:
            return action.event;
        default:
            return event;
    }
} 