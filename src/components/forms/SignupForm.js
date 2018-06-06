import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message, Grid, Segment } from 'semantic-ui-react';
import {Link } from "react-router-dom"
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';

class SignupForm extends React.Component{
    state = {
        data: {
            username:'',
            email:'',
            password:''
        },
        loading: false,
        errors: {}
    }
    onChange = e =>{
        this.setState({data: { ...this.state.data,[e.target.name]: e.target.value } }); 
    }
        
    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.setState({ loading:true });
            this.props
            .submit(this.state.data)
            .catch(err =>{
                const {message}= err.response.data
                this.setState({errors: {...this.state.errors,"signup":message},loading:false })
            } );
        }
    };
    validate = data => {
        const errors ={};
        if(!data.username) errors.username = "cannot be blank";
        if (!isEmail(data.email)) errors.email = "Invalid email";
        if(!data.password) errors.password = "cannot be blank";
        return errors;
    }
    // In render we deconstruct it to take data, errors and loading
    render(){
        const{ data, errors, loading } = this.state;
        return(
            <Grid centered  >
                <Grid.Column width={8}>
                    <Segment>
                        <Form onSubmit = {this.onSubmit} loading={loading}>
                            <Form.Field error={!!errors.username}>
                                <label htmlFor="username">username</label>
                                <input 
                                type="text" 
                                id="username"
                                name="username"
                                placeholder="My username"
                                value={data.username}
                                onChange={this.onChange}/>
                                {errors.username && <InlineError text={errors.username} />}
                            </Form.Field>
                            <Form.Field error={!!errors.email}>
                                <label htmlFor="email">Email</label>
                                <input 
                                type="email" 
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                                value={data.email}
                                onChange={this.onChange}/>
                                {errors.email && <InlineError text={errors.email} />}
                            </Form.Field>
                            <Form.Field error={!!errors.password}>
                                <label htmlFor="password">Password</label>
                                <input 
                                type="password" 
                                id="password"
                                name="password"
                                placeholder="Make it secure"
                                value={data.password}
                                onChange={this.onChange}/>
                                {errors.password && <InlineError text={errors.password} />}
                            </Form.Field>
                            {errors.signup && <Message negative>
                            <Message.Header>{errors.signup}</Message.Header>
                            <p>{errors.Warning}</p>
                            </Message>}
                            <Button >Sign up</Button> or  <Button as={Link} to="/login" >Login</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}
SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignupForm;