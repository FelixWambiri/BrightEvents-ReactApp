import React from 'react';
import PropTypes from 'prop-types';
import {Form,Button, Grid, Segment} from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class ResetPasswordForm extends React.Component{
    state = {
        data : {
            token: '',
            password: '',
            passwordConfirmation: ''
        },
        loading : false,
        errors : {}, 
        showPassword:false,
        showConfirmPass:false,
    };

    componentDidMount = () => {
      this.setState({...this.state, data: { ...this.state.data,token: this.props.token } })
    }
    onChange = e =>
        this.setState({...this.state, data: { ...this.state.data,[e.target.name]: e.target.value } }); 

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
    validate = data =>{
        const errors = {};
        if (!data.password) errors.password = "cannot be blank";
        if (data.password !== data.passwordConfirmation) errors.password="Passwords must match";
        return errors;
    };
    render(){
        const {errors, data, loading } = this.state;
        return(
            <Grid centered >
                <Grid.Column width={8}>
                    <Segment >
                        <Form  onSubmit ={this.onSubmit} loading={loading}>
                            <Form.Field error={!!errors.password}>
                            <label htmlFor="password">password</label>
                                <div class="ui  icon input">
                                    <input type={`${this.state.showPassword?'text':'password'}`}
                                    id="password"
                                    name="password"
                                    placeholder="Make it secure"
                                    value={data.password}
                                    onChange={this.onChange}/>
                                    {errors.password && <InlineError text={errors.password} />}
                                    <i className={`${this.state.showPassword?'hide':'unhide'} icon link`} onClick={()=>this.setState({showPassword:!this.state.showPassword})}></i>
                                </div>
                            </Form.Field>
                            <Form.Field errors={errors?!!errors.passwordConfirmation:{}}>
                                <label htmlFor="passwordConfirmation">password</label>
                                <div class="ui  icon input">
                                <input type={`${this.state.showConfirmPassword?'text':'password'}`} 
                                    id="password"
                                    name="passwordConfirmation"
                                    placeholder="type it again"
                                    value={data.passwordConfirmation}
                                    onChange={this.onChange}/>
                                    <i className={`${this.state.showConfirmPassword?'hide':'unhide'} icon link`} onClick={()=>this.setState({showConfirmPassword:!this.state.showConfirmPassword})}></i>
                                </div>
                            </Form.Field>
                            <Button primary>Reset</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}
ResetPasswordForm.PropTypes = {
    submit: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
};
export default ResetPasswordForm;