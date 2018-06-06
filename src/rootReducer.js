import {combineReducers} from 'redux';
import user from "./reducers/user";
import events from "./reducers/events";
import loading from "./reducers/loading.reducer"
import event from "./reducers/event.reducer"
import guests from "./reducers/guest";
import myEvents from "./reducers/my_events.reducer"
import searching from "./reducers/searchLoading.reducer";
import error from "./reducers/error.reducer"
export default combineReducers({
    user,
    events,
    event,
    guests,
    myEvents,
    error,
    searching,
    loading
});