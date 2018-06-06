import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {allEventsSelector} from '../../reducers/events';
import AddEventsCtA from '../ctas/AddEventsCtA';
import {Segment, Button, Message} from 'semantic-ui-react';
import EventForm from '../forms/EventForm';
import {fetchEvents, searchEvents} from '../../actions/events';
import SingleEvent from '../SingleEvent';
import Loader from "../../components/Loader";
import {deleteEvent} from "../../actions/events";
import {showReservations} from "../../actions/events";
class DashboardPage extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        // events: null
    }
  }
    componentDidMount = () => {
        this.props.fetchEvents();
    }
    render(){
        const {events,isLoading,deleteEvent,showReservations} = this.props
        if (isLoading){
            return <Loader/>
        }

        return(
        <div>
            <AddEventsCtA/>
            {/* <SearchEventForm onSearch={searchEvents} onEventSelect = {this.onEventSelect}/> */}
                {this.state.event && (<EventForm submit = {this.addEvent} event = {this.state.event}/>)}
                
            <div className="ui cards">
            {
                events.length > 0 ? 
                events && 
                events.map(event => <SingleEvent key={event.id} onDelete={deleteEvent} event={event} showReservations={showReservations}/>)
                :
                <Message warning className="ui fluid container">
                    <Message.Header>You have not created any Event Yet!</Message.Header>
                    <p>To add events click on the plus button above.</p>
                </Message>
               
            }
            </div>
        </div>
);}
}
        
DashboardPage.propTypes ={
    fetchEvents : PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch=>({
    fetchEvents:()=>dispatch(fetchEvents()),
    deleteEvent:(id)=>dispatch(deleteEvent(id)),
    showReservations:(id)=>dispatch(showReservations(id))
})

function mapStateToProps(state){
    return{
        events: state.myEvents,
        isLoading:state.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);