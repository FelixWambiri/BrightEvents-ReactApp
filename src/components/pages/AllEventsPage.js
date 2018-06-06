import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventForm from '../forms/EventForm';
import {fetchAllEvents} from '../../actions/events';
import {makeReservation} from '../../actions/events';
import Loader from "../../components/Loader"
import AllEventsCard from '../AllEventsCard';
import SearchEventForm from '../forms/SearchEventForm';
import { searchEvents} from '../../actions/events';
import { Message,Grid,Card,Image, Pagination } from 'semantic-ui-react';

class AllEventsPage extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        pagination:{
            active:3,
            total:10
        },
        originalEvents:[],
        events:[],
        queryError:''
    }
    this.doSearch = this.doSearch.bind(this)
  }
    componentDidMount = () => {
        this.props.fetchAllEvents().then(()=>{
            this.setState({originalEvents:this.props.events,events:this.props.events})
        }).catch(error=>console.log("the error idf",error));
    }
    doSearch(query){
        this.props.searchEvents(query).then(res=>{
            if(res.ok){
                this.setState({events:this.props.events})
            }else{
                console.log("44000 ",res.message)
                if(res.message == undefined){
                    this.setState({events:res,queryError:''})
                }else{
                    this.setState({events:this.state.originalEvents,queryError:`Query ${query} Not found`})
                }
            }
        }).catch(error=>console.log("the search error ", error))
    }
    render(){
        console.log("the state is now ", this.state)
        const {isLoading,deleteEvent,user,makeReservation, searchEvents} = this.props
        const {events} = this.state
        const {active,total} = this.state.pagination
        if (isLoading){
            return <Loader/>
        }



        return(
        <div>
            <SearchEventForm onSearch={this.doSearch}/>
            {
                this.state.queryError &&
                <Message warning>{this.state.queryError}</Message>
            }
            <div className="ui cards">
            {
                events.length > 0 &&
                events.map((event,i) =><AllEventsCard   makeReservation={makeReservation} key={i} user={user} event={event}/>)
            }
            </div>
           
            <Pagination defaultActivePage={active} totalPages={total} />
            </div>

          
);}
}
        
AllEventsPage.propTypes ={
    fetchAllEvents : PropTypes.func.isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
};

const mapDispatchToProps = dispatch=>({
    fetchAllEvents:()=>dispatch(fetchAllEvents()),
    makeReservation:(id)=>dispatch(makeReservation(id)),
    searchEvents : (query)=>dispatch(searchEvents(query))
})
function mapStateToProps(state){
    return{
        isLoading:state.loading,
        events:state.events,
        user:state.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllEventsPage);