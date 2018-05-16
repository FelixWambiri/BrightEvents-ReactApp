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
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import {connect} from 'react-redux';

// React redux connect has issues with react route and to resolve this we use location on the routes
class App extends React.Component{
  render(){
    const {location, isAuthenticated} = this.props;
    return(
      <div className='ui container '>
      {isAuthenticated && <TopNavigation/>} 
      <Switch>
        <Route location = {location } path='/' exact component={HomePage} />
        <GuestRoute location = {location } path='/login' exact component={LoginPage} />
        <GuestRoute location = {location } path='/signup' exact component={SignupPage} />
        <GuestRoute location = {location } path='/forgot_password' exact component={ForgotPasswordPage} />
        <GuestRoute location = {location } path='/reset_password/:token' exact component={ResetPasswordPage} />
        <UserRoute location = {location } path='/dashboard' exact component={DashboardPage} />
        <UserRoute location = {location } path='/events/new' exact component={NewEventPage} />
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
