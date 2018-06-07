import axios from 'axios';
import fetch from './utils/fetchinga';
import { MY_EVENTS_URL, BASE_URL, EVENTS_URL, EVENT_URL } from './utils/constants';
// import { makeReservation } from './actions/events';

const headers = localStorage.getItem('brighteventstoken');
// Create axios instance so as to use interceptors
const instance = axios.create({
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  },
  crossDomain: true,
});

// Use the axios instance to use an interceptor and inject the token
instance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem('brighteventstoken');
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

// login function takes in credentials and then uses axios to make a post request to the server and if no errors occur we get the data from the response
// Instead of using axios directly we use the instance
export default{
  user: {
    login: credentials => instance.post('/auth/login', credentials),
    signup: user => instance.post('/auth/register', user).then(res => res.data.user),
    resetPasswordRequest: email => instance.post('auth/acquire_token', email),
    validateToken: token => instance.get(`http:/\/localhost:5000/api/auth/confirm/${token}`).then(resp => console.log(resp)),
    resetPassword: data => instance.put('http://localhost:5000/api/auth/reset_password', data),
    addEvent: data => instance.post('/events', data),
  },
  events: {
    fetchAll: () => instance.get('/my_events').then(res => res.data.events),
    fetchAllEvents: () => instance.get('/events').then(res => res.data.events),
    // fetchAll: () => instance.get(`${MY_EVENTS_URL}`).then(res => res.events).catch(error=>console.log("the error is ", error)),
    delete: id => instance.delete(`${EVENTS_URL}/${id}`).then(res => res.events).catch(error => console.log('the error is ', error)),
    // delete: (id) => fetch("DELETE",`${EVENTS_URL}/${id}`, headers).then(res => res.events).catch(error=>console.log("the error is ", error)),
    fetchSingle: id => fetch('GET', `${EVENT_URL}/${id}`, headers).then(res => res.event).catch(error => console.log('the error is ', error)),
    updateEvent: (id, data) => instance.put(`${EVENTS_URL}/${id}`, data),
    makeReservation: id => instance.post(`/event/${id}/rsvp`).then(res => res.event), //.catch(error => console.log('the error is ', error)),
    showReservations: id => instance.get(`/event/${id}/rsvp`).then(res => res.data.Attendants).catch(error => console.log('the error is ', error)),
    searchEvents: query => instance.post(`/search?q=${query}`).then(res => res.data.events),// .catch(error => console.log("the error is",error)),
  },
};
