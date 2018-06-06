import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import { logout } from '../../actions/auth';

import { Segment, Grid, Image as ImageComponent, Item, Button } from 'semantic-ui-react';
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
