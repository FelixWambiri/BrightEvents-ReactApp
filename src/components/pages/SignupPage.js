import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/users';


// submit will take data and invoke thunk action and if everything is ok it will push to dashboard.
class SignupPage extends React.Component{
    submit = (data) => this.props.signup(data).then(() => this.props.history.push('/'));
    render(){
        return(
            <div>
                <SignupForm submit={this.submit}/>
            </div>
        );
    }
}

SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);