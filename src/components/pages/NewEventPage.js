import React from 'react';
import {Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SearchEventForm from '../forms/SearchEventForm';
import EventForm from '../forms/EventForm';
import { addEvent } from '../../actions/events';

class NewEventPage extends React.Component{
    submit = (data) => this.props.addEvent(data).then(() => this.props.history.push('/dashboard'));
    render(){
        return(
            <div>
                <Segment>
                    <h1>Add a new event </h1>
                    <EventForm submit={this.submit}/>
                </Segment>
            </div>
        );
    }
}
NewEventPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    addEvent: PropTypes.func.isRequired
};

export default connect(null, { addEvent })(NewEventPage);