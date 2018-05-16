import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
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
                this.setState({errors: err.data,loading:false })
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
            <Form onSubmit = {this.onSubmit} loading={loading}>
                {errors.Warning && <Message negative>
                <Message.Header>Something went wrong</Message.Header>
                <p>{errors.Warning}</p>
                </Message>}
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
            <Button primary>Sign up</Button>
            </Form>
        );
    }
}
SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignupForm;