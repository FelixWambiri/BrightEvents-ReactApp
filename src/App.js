import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import SignupPage from './components/pages/SignupPage';
import NewEventPage from './components/pages/NewEventPage';
import AllEventsPage from './components/pages/AllEventsPage';
import ReservationsDisplayPage from './components/pages/ReservationsPage'
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import {connect} from 'react-redux';
import EditPage from './components/pages/EditPage';
import Rsvps from './components/pages/Rsvps';
// import "./assets/bootstrap-grid.min.css"
// React redux connect has issues with react route and to resolve this we use location on the routes
class App extends React.Component{
  render(){
    const {location, isAuthenticated} = this.props;
    return(
      <div className='ui container '>
      {<TopNavigation loggedIn={isAuthenticated}/>} 
      <Switch>
        <Route location = {location } path='/' exact component={HomePage} />
        <GuestRoute location = {location } path='/login' exact component={LoginPage} />
        <GuestRoute location = {location } path='/signup' exact component={SignupPage} />
        <GuestRoute location = {location } path='/forgot_password' exact component={ForgotPasswordPage} />
        <GuestRoute location = {location } path='/reset_password/:token' exact component={ResetPasswordPage} />
        <UserRoute location = {location } path='/dashboard' exact component={DashboardPage} />
        <UserRoute location = {location } path='/events/new' exact component={NewEventPage} />
        <UserRoute location = {location } path='/events/edit/:id' exact component={EditPage} />
        <Route location = {location } path='/events' exact component={AllEventsPage} />
        <UserRoute location = {location } path='/event/:id/rsvp' exact component={Rsvps} />
        <GuestRoute location = {location} path='/confirm/:token' exact component={ResetPasswordPage}/>
        {/* <Route component={NotFound} /> */}
      </Switch>
      </div>
      );
  }
}

App.propTypes ={
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function isNotEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return true;
  }

  return false;
}

function mapStateToProps(state){
  return{
    isAuthenticated: isNotEmpty(state.user)
  };
}
export default connect(mapStateToProps)(App);
