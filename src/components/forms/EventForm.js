import React from 'react';
import PropTypes from 'prop-types';
import {Form,Button,Message, Grid, Segment} from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import { eventValidator  } from "../../utils/validator";
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
class EventForm extends React.Component{
    state = {
        data : {
            name : '',
            category : '',
            location:  '',
            date_hosted :  '',
            description : ''
        },
        loading : false,
        errors : {}
    };
    formattedDate = date => {
       return  moment(date).format("yyyy-MM-dd")
    }
    onDateChange = date=>this.setState({...this.state, data: { ...this.state.data,"date_hosted": date } })
    onChange = e =>
        this.setState({...this.state, data: { ...this.state.data,[e.target.name]: e.target.value } }); 
    onChangeNumber = e =>
        this.setState({...this.state, data: { ...this.state.data,[e.target.name]: parseInt(e.target.value, 10) } }); 
    onSubmit = e => {
        e.preventDefault();
        const errors = eventValidator(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.setState({ loading:true });
            this.props
            .submit(this.state.data)
            .catch(err =>{
                console.log(err.response.data)
                this.setState({errors: err.response.data,loading:false })
            } );
        }
    };
    render (){
        const {errors, data, loading} = this.state;
        return(
            <Grid centered>
                <Grid.Column width={8}>
                    <Segment inverted>
                        <Form inverted onSubmit = {this.onSubmit} loading= {loading}>
                            {errors.Warning && <Message negative>
                            <Message.Header>Something went wrong</Message.Header>
                            <p>{errors.Warning}</p>
                            </Message>}
                            <Form.Field errors={!!errors.name}>
                                <label htmlFor="name">name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    placeholder="please enter the name"
                                    value={data.name}
                                    onChange={this.onChange}/>
                                {errors.name && <InlineError text={errors.name} />}
                            </Form.Field>
                            <Form.Field errors={!!errors.category}>
                                <label htmlFor="category">category</label>
                                <input 
                                    type="text" 
                                    id="category"
                                    name="category"
                                    placeholder="please enter the category"
                                    value={data.category}
                                    onChange={this.onChange}/>
                                {errors.category && <InlineError text={errors.category} />}
                            </Form.Field>
                            <Form.Field errors={!!errors.location}>
                                <label htmlFor="location">location</label>
                                <input 
                                    type="text" 
                                    id="location"
                                    name="location"
                                    placeholder="please enter the location"
                                    value={data.location}
                                    onChange={this.onChange}/>
                                {errors.location && <InlineError text={errors.location} />}
                            </Form.Field>
                            <Form.Field errors={!!errors.date_hosted}>
                                <label htmlFor="date_hosted">date</label>
                                <input 
                                    type="date" 
                                    id="date_hosted"
                                    name="date_hosted"
                                    placeholder="please enter the date_hosted"
                                    value={data.date_hosted}
                                    onChange={this.onChange}/>
            
                                {errors.date_hosted && <InlineError text={errors.date_hosted} />}
                            </Form.Field>
                            <Form.Field errors={!!errors.description}>
                                <label htmlFor="description">description</label>
                                <input 
                                    type="text" 
                                    id="description"
                                    name="description"
                                    placeholder="please enter the description"
                                    value={data.description}
                                    onChange={this.onChange}/>
                                {errors.description && <InlineError text={errors.description} />}
                            </Form.Field>
                            <Button>save</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
            
        );
    }
}
EventForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default EventForm;
