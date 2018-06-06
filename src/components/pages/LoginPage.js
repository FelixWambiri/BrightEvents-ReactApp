import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';

class LoginPage extends React.Component{
  // Login thunk action which we pass data to it and it returns a promise and if everything is ok we redirect to the homepage.
  // To redirect we will use history by react router
  // Now we will redirect to dash board
  submit = data => this.props.login(data).then(()=>this.props.history.push('/dashboard'));
  render(){
    return(
      <div>
        <h1>Login page</h1>
        <LoginForm submit={this.submit}/>
      </div>
    ); 
  }
}
LoginPage.propTypes = {
  history: PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired,
  login:PropTypes.func.isRequired
};
// We do not need any properties from the redux store so mapStateToProp function is null and we do a shortcut for Dispatch whereby we pass an object containing the action we want dispatched.
export default connect(null,{login})(LoginPage);