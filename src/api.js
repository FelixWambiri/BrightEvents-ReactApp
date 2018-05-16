import axios from 'axios';

// Create axios instance so as to use interceptors
const instance = axios.create({
    headers : {
        Accept : 'application/json',
        ContentType : 'application/json'
    }
});

// Use the axios instance to use an interceptor and inject the token
instance.interceptors.request.use((config)=>{
    const access_token = localStorage.getItem('brighteventstoken');
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
});

// login function takes in credentials and then uses axios to make a post request to the server and if no errors occur we get the data from the response
// Instead of using axios directly we use the instance
export default{
    user:{
        login:(credentials) => instance.post("/auth/login", credentials).then(res => res.data.token),
        signup: user => instance.post("/auth/register", user).then(res => res.data.user),
        resetPasswordRequest: email => instance.post("auth/acquire_token",email),
        validateToken: token => instance.post("auth/confirm/",token),
        resetPassword: data => instance.post("auth/reset_password/",data),
        addEvent: data => instance.post("/events",data)
    },
    events:{
        fetchAll: () => instance.get('/my_events').then(res => res.data.events)
    }
}