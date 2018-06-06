import axios from 'axios';


export default (token = null) => {
    if(token){
        axios.defaults.headers.common.contentType = 'application/json';
    } else {
        delete axios.defaults.headers.common.authorization;
    }
}