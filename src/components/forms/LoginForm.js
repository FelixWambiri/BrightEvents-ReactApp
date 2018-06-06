import React from 'react';
import PropTypes from 'prop-types';
import {Form,Button,Message, Segment, Grid} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import {Link} from 'react-router-dom';
class LoginForm extends React.Component{
    state={
        data:{
          email:'',
            password:''
        },
        loading:false,
        errors:{}
    };
    onChange = e =>
        this.setState({data: { ...this.state.data,[e.target.name]: e.target.value } }); 
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length===0){
            this.setState({ loading:true });
            this.props
                .submit(this.state.data)   
                .catch(err =>{
                    console.log("response ", err)
                    const {message} = err.response.data
                     this.setState({errors: {...this.state.errors,"login":message}, loading:false})
                }
                    );
        }
    };
    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email="invalid email";
        if(!data.password) errors.password="cannot be blank";
        return errors;
    };
    render(){
        const{ data, errors,loading } = this.state;
        console.log("the error is ", errors)
        const styles ={
            root:{
                marginTop:'15%'
            }
        }
        return(
            <Grid centered styles={styles.root}>
                <Grid.Column width={8}>
                    <Segment >
                        <Form  onSubmit={this.onSubmit} loading={loading}>
                        {/* convert into boolean the errors to be highlighted */}
                            <Form.Field error={!!errors.email}>
                                <label htmlFor="email">email</label>
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
                                <label htmlFor="password">password</label>
                                <input 
                                type="password" 
                                id="password"
                                name="password"
                                placeholder="Make it secure"
                                value={data.password}
                                onChange={this.onChange}/>
                                {errors.password && <InlineError text={errors.password} />}
                            </Form.Field>
                            {!!errors.login && <Message negative>
                            <Message.Header>{errors.login}</Message.Header>
                            <p>{errors.message}</p>
                            </Message>}
                            <Button primary>Login</Button>
                            <Link to = "/forgot_password">Forgot Password?</Link>
                            <hr/>
                            Create an Account <Link to = "/signup">Signup</Link>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}
LoginForm.propTypes={
    submit:PropTypes.func.isRequired
};
export default LoginForm; 