import { REQUEST_FAILED } from "../types";

export default (error='',action) =>{
    switch (action.type) {
        case REQUEST_FAILED:
            return action.error;
        default:
            return error;
    }
} 