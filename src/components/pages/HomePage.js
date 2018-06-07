import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import AllEventsPage from './AllEventsPage';


// Deconstruct it here
const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <AllEventsPage />
  </div>
);
function isNotEmpty(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) { return true; }
  }

  return false;
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: isNotEmpty(state.user),
  };
}

export default connect(mapStateToProps, { logout })(HomePage);
