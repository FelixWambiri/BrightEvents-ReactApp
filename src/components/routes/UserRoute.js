import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// This functional component will take everything we had passed to routes
// It will take component 
// Other properties will be stored in the rest variable
// We pass all the properties also to route
// if user is authenticated, we render the component otherwise we render redirect to home page
const UserRoute = ({ isAuthenticated,component: Component, ...rest }) => (
   <Route 
   {...rest} 
   render={props =>
    isAuthenticated ? <Component{...props} /> : <Redirect to = "/" /> }
    />
);

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

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};
export default connect(mapStateToProps)(UserRoute);