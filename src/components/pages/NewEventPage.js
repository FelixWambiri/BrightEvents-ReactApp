import React from 'react';
import {Segment, Header, Icon, Grid} from 'semantic-ui-react';
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
                <Grid centered>
                    <Grid.Column width={8}>
                        <Segment>
                            <Header as='h2' textAlign='center'>
                                <Icon name='plus square' />
                                <Header.Content>Add your new Event</Header.Content>
                            </Header>
                            </Segment>
                    </Grid.Column>
                </Grid>
                <EventForm submit={this.submit}/>
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