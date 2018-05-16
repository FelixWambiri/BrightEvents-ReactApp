// import React from 'react';
// import PropTypes from 'prop-types';
// import {Form,Button, Grid, Segment} from 'semantic-ui-react';
// import InlineError from '../messages/InlineError';

// class EventForm extends React.Component {
//     state = {
//         data : {
//             id :this.props.event.id,
//             name :this.props.event.name,
//             category :this.props.event.category,
//             location: this.props.event.location,
//             date_hosted : this.props.event.date_hosted,
//             description : this.props.event.description,
//             owner : this.props.event.owner
//         },
//         loading : false,
//         errors : {}
//     };
//     componentWillReceiveProps = props => {
//         this.setState({
//             data : {
//                 id :props.event.id,
//                 name :props.event.name,
//                 category :props.event.category,
//                 location: props.event.location,
//                 date_hosted : props.event.date_hosted,
//                 description : props.event.description,
//                 owner : props.event.owner
//             }
//         });
//     };
//     onChange = e =>
//         this.setState({...this.state, data: { ...this.state.data,[e.target.name]: e.target.value } }); 
//     onChangeNumber = e =>
//         this.setState({...this.state, data: { ...this.state.data,[e.target.name]: parseInt(e.target.value, 10) } }); 
//     onSubmit = e => {
//         e.preventDefault();
//         const errors = this.validate(this.state.data);
//         this.setState({errors});
//         if(Object.keys(errors).length === 0){
//             this.setState({ loading:true });
//             this.props
//             .submit(this.state.data)
//             .catch(err =>{
//                 this.setState({errors: err.data,loading:false })
//             } );
//         }
//     };
//     validate = data => {
//         const errors = {};
//         if(!data.name) errors.title ="can`t be blank";
//         if(!data.category) errors.category = "can`t be blank";
//         if(!data.location) errors.location = "can`t be blank";
//         if(!data.date_hosted) errors.date_hosted = "can`t be blank";
//         if(!data.description) errors.description = "can`t be blank";
//         return errors;
//     };
//     render (){
//         const {errors, data, loading} = this.state;
//         return(
//             <Segment>
//                 <Form onSubmit = {this.onSubmit} loading= {loading}>
//                 <Grid columns={2} fluid stackable>
//                 <Grid.Row>
//                     <Grid.Column >
//                     <Form.Field errors={!!errors.name}>
//                         <label htmlFor="name">name</label>
//                         <input 
//                             type="text" 
//                             id="name"
//                             name="name"
//                             placeholder="please enter the name"
//                             value={data.name}
//                             onChange={this.onChange}/>
//                         {errors.name && <InlineError text={errors.name} />}
//                     </Form.Field>
//                     <Form.Field errors={!!errors.category}>
//                         <label htmlFor="category">category</label>
//                         <input 
//                             type="text" 
//                             id="category"
//                             name="category"
//                             placeholder="please enter the category"
//                             value={data.category}
//                             onChange={this.onChange}/>
//                         {errors.category && <InlineError text={errors.category} />}
//                     </Form.Field>
//                     <Form.Field errors={!!errors.location}>
//                         <label htmlFor="location">location</label>
//                         <input 
//                             type="text" 
//                             id="location"
//                             name="location"
//                             placeholder="please enter the location"
//                             value={data.location}
//                             onChange={this.onChange}/>
//                         {errors.location && <InlineError text={errors.location} />}
//                     </Form.Field>
//                     <Form.Field errors={!!errors.date_hosted}>
//                         <label htmlFor="date_hosted">date_hosted</label>
//                         <input 
//                             type="date" 
//                             id="date_hosted"
//                             name="date_hosted"
//                             placeholder="please enter the date_hosted"
//                             value={data.date_hosted}
//                             onChange={this.onChangeNumber}/>
//                         {errors.date_hosted && <InlineError text={errors.date_hosted} />}
//                     </Form.Field>
//                     <Form.Field errors={!!errors.description}>
//                         <label htmlFor="description">description</label>
//                         <input 
//                             type="text" 
//                             id="description"
//                             name="description"
//                             placeholder="please enter the description"
//                             value={data.description}
//                             onChange={this.onChange}/>
//                         {errors.description && <InlineError text={errors.description} />}
//                     </Form.Field>
//                     </Grid.Column>
//                 </Grid.Row>
//                 <Grid.Row>
//                     <Button primary >save</Button>
//                 </Grid.Row>
//                 </Grid>
//                 </Form>
//             </Segment>
//         );
//     }
// }
// EventForm.propTypes = {
//     submit : PropTypes.func.isRequired,
//     event : PropTypes.shape({
//         // id :PropTypes.number.isRequired,
//         name :PropTypes.string.isRequired,
//         category :PropTypes.string.isRequired,
//         location: PropTypes.string.isRequired,
//         date_hosted : PropTypes.number.isRequired,
//         description : PropTypes.string.isRequired,
//         owner : PropTypes.string.isRequired
//     }).isRequired
// };
// export default EventForm;

// 
// 
// 
// 
import React from 'react';
import PropTypes from 'prop-types';
import {Form,Button,Message} from 'semantic-ui-react';
import InlineError from '../messages/InlineError';


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
    onChange = e =>
        this.setState({...this.state, data: { ...this.state.data,[e.target.name]: e.target.value } }); 
    onChangeNumber = e =>
        this.setState({...this.state, data: { ...this.state.data,[e.target.name]: parseInt(e.target.value, 10) } }); 
    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
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
    validate = data => {
        const errors = {};
        if(!data.name) errors.name ="can`t be blank";
        if(!data.category) errors.category = "can`t be blank";
        if(!data.location) errors.location = "can`t be blank";
        if(!data.date_hosted) errors.date_hosted = "can`t be blank";
        if(!data.description) errors.description = "can`t be blank";
        return errors;
    };
    // In render we deconstruct it to take data, errors and loading
    render (){
        const {errors, data, loading} = this.state;
        return(
                <Form onSubmit = {this.onSubmit} loading= {loading}>
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
                            type="text" 
                            id="date_hosted"
                            name="date_hosted"
                            placeholder="please enter the date_hosted"
                            value={data.date_hosted}
                            onChange={this.onChange}/>
                            {/* // onChange={this.onChangeNumber}/> */}
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
                    <Button primary >save</Button>
                
                </Form>
            
        );
    }
}
EventForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default EventForm;
