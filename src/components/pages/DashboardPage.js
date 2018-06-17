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
import DeleteModal from '../../components/deleteModal';
import FlashMessage from 'react-flash-message';
import { clearMessage } from '../../actions/auth';


const {Consumer, Provider} = React.createContext({})

class DashboardPage extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        modalOpen:false,
        selected:0,
        message:'',
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
    componentDidMount = () => {
        this.setState({message:''},()=>this.setState({message:this.props.message},()=>this.props.clearMessage()))
        this.props.fetchEvents();
    }


    toggleModal(id){
        this.setState({modalOpen:!this.state.modalOpen,selected:id})
    }
    render(){
        const {modalOpen} = this.state;
        const {events,isLoading,deleteEvent,showReservations} = this.props
        if (isLoading){
            return <Loader/>
        }

        return(
        <div>
            {
                this.state.message && 
                <FlashMessage duration={3000}>
                <Message success>
                    {this.state.message}
                    </Message></FlashMessage>
            }
            <Provider value={{toggleModal:this.toggleModal, isOpen:this.state.modalOpen}} >
            <DeleteModal isOpen={modalOpen}  toggleModal={this.toggleModal} handleDelete={()=>this.props.deleteEvent(this.state.selected)} />
            
            <AddEventsCtA/>
            {/* <SearchEventForm onSearch={searchEvents} onEventSelect = {this.onEventSelect}/> */}
                {this.state.event && (<EventForm submit = {this.addEvent} event = {this.state.event}/>)}
                
            <div className="ui cards">
            {
                events.length > 0 ? 
                events && 
                events.map(event => <Consumer >{props =><SingleEvent {...props} key={event.id} onDelete={deleteEvent} event={event} showReservations={showReservations}/>}</Consumer>)
                :
                <Message warning className="ui fluid container">
                    <Message.Header>You have not created any Event Yet!</Message.Header>
                    <p>To add events click on the plus button above.</p>
                </Message>
               
            }
            </div>
        </Provider>

        </div>
);}
}
        
DashboardPage.propTypes ={
    fetchEvents : PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch=>({
    fetchEvents:()=>dispatch(fetchEvents()),
    deleteEvent:(id)=>dispatch(deleteEvent(id)),
    showReservations:(id)=>dispatch(showReservations(id)),
    clearMessage:()=>dispatch(clearMessage())
})

function mapStateToProps(state){
    return{
        events: state.myEvents,
        isLoading:state.loading,
        message:state.successMessage,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);