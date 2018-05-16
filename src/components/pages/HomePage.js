import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'; 

import { Segment, Grid, Image as ImageComponent, Item, Button } from 'semantic-ui-react'


// Deconstruct it here
const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    {/* <div class="ui inverted segment">
      <p>I'm here to tell you something, and you will probably read me first.</p>
    </div> */}
    { isAuthenticated ? (<button onClick = { () => logout() }>Logout</button>) : ( 
        <div className="ui one column centered grid">
            <div className="column">
            </div>
    
        <div className= "ui buttons" style={{marginTop:230}}>
          <button className="ui button black">
              <i className = "sign in icon"></i><Link to='/login'>Login</Link></button>
          <div className="or"></div>
          <button className = "ui button green">
              <i className="users icon"></i><Link to='/signup'>Sign Up</Link>
          </button>
        </div>
        </div>
        
      )}
  </div>
);
function isNotEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return true;
  }

  return false;
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    isAuthenticated: isNotEmpty(state.user)
  };
}

export default connect(mapStateToProps, { logout })(HomePage);
