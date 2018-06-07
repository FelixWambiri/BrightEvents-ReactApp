import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import {eventValidator} from "../../utils/validator";
import Loader from '../Loader';
import moment from 'moment';

class EditEventForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            event:{
                name :'',
                category : '',
                location:  '',
                date_hosted :  '',
                description : ''
            }
        }
    }
    handleSubmit = e=>{
        const {history} = this.props;
        e.preventDefault()
        const id = this.props.match.params.id
        const {name,category,location,date_hosted,description} = this.refs;
        console.log("the data is ", this.refs)
        const event = {
            name:name.value,
            category:category.value,
            location:location.value,
            date_hosted:date_hosted.value,
            description:description.value
        }
        this.props.updateEvent(id,event).then(()=>history.push("/dashboard"))



    }
    formattedDate = date => {
        return  moment(date).format("yyyy-MM-dd")
     }
    componentDidMount(){
        const {event} = this.props;
        const id = this.props.match.params.id
        this.props.fetchEvent(id)
    };
    onChange = e =>this.setState({name: e.target.value});
    render (){
    const {event,loading} = this.props;     
    if (loading){
        return <Loader/>
    }
        return(
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Field >
                        <label htmlFor="name">name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="please enter the name"
                            Value={event.name}
                            ref="name"
                            onChange={this.onChange}
                           />
                    </Form.Field>
                     <Form.Field >
                        <label htmlFor="category">category</label>
                        <input 
                            type="text" 
                            id="category"
                            name="category"
                            placeholder="please enter the category"
                            Value={event.category}
                            ref="category"
                            onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field> 
                        <label htmlFor="location">location</label>
                        <input 
                            type="text" 
                            id="location"
                            name="location"
                            placeholder="please enter the location"
                            Value={event.location}
                            ref="location"
                            onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field >
                        <label htmlFor="date_hosted">date</label>
                        <input 
                            type="date" 
                            id="date_hosted"
                            name="date_hosted"
                            placeholder="please enter the date_hosted"
                            Value={this.formattedDate(event.date_hosted)}
                            ref="date_hosted"
                            onChange={this.onChange}/>

                    </Form.Field>
                    <Form.Field >
                        <label htmlFor="description">description</label>
                        <input 
                            type="text" 
                            id="description"
                            name="description"
                            placeholder="please enter the description"
                            Value={event.description}
                            ref="description"
                            onChange={this.onChange}/>
                    </Form.Field>   
                    <Button primary >save</Button>
                
                </Form>
            
        );
    }
}

export default EditEventForm;
