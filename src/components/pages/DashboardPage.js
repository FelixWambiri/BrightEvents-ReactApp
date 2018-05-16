import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {allEventsSelector} from '../../reducers/events';
import AddEventsCtA from '../ctas/AddEventsCtA';
import {Segment} from 'semantic-ui-react';
import SearchEventForm from '../forms/SearchEventForm';
import EventForm from '../forms/EventForm';
import {fetchEvents} from '../../actions/events';
import SingleEvent from '../SingleEvent';

class DashboardPage extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        // events: null
    }
  }
    componentDidMount = () => {
        // this.onInit(this.props);

        this.props.fetchEvents();
    }
    // onEventSelect = event => this.setState({event});
    render(){
        const {events} = this.props
        console.log('>>>', this.props.events)
        return(
        <div>
            <AddEventsCtA/>
            <SearchEventForm onEventSelect = {this.onEventSelect}/>
                {this.state.event && (<EventForm submit = {this.addEvent} event = {this.state.event}/>)}

            <div className="ui cards">
            {
                events.length > 0 && 
                events.map(event => <SingleEvent event={event}/>)
            }
            </div>
        </div>
);}
}
        
DashboardPage.propTypes ={
    fetchEvents : PropTypes.func.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
};

// we are going to use selectors
function mapStateToProps(state){
    return{
        events: allEventsSelector(state)
    };
};

export default connect(mapStateToProps, {fetchEvents})(DashboardPage);