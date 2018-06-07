import React from 'react';
import PropTypes from 'prop-types';
import {Form,Button, Message, Grid, Segment} from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../messages/InlineError';

class ForgotPasswordForm extends React.Component{
    state = {
        data : {
            email:''
        },
        loading : false,
        errors : {} 
    };
    onChange = e =>{
        this.setState({data: { ...this.state.data,[e.target.name]: e.target.value } }); 
    };
    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            console.log(this.state.data)
            this.setState({ loading:true });
            this.props
            .submit(this.state.data)
            .catch(err =>this.setState({errors: err.data, loading:false })
            );
        }
        };
    validate = data => {
        const errors ={};
        if (!isEmail(data.email)) errors.email = "Invalid email";
        return errors;
    };
    render(){
        const {errors, data, loading} = this.state;
        const styles ={
            root:{
                marginTop:"15%"
            }
        }
        return(
            <Grid centered styles={styles.root}>
                <Grid.Column width={8}>
                    <Segment>
                        <Form onSubmit={this.onSubmit} loading={loading}>
                            {errors.Warning && <Message negative>
                            <Message.Header>Something went wrong</Message.Header>
                            <p>{errors.Warning}</p>
                            </Message>}
                            <Form.Field errors={!!errors.email}>
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
                            <Button primary>Reset Password</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}
ForgotPasswordForm.propTypes = {
    submit:PropTypes.func.isRequired
};
export default ForgotPasswordForm;