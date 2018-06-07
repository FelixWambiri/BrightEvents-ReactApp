import { showReservations } from "../../actions/events";
import ReservationsDisplayPage from "./ReservationsPage";
import { onComponentDidMount } from 'react-redux-lifecycle'
import {connect } from "react-redux"


import React, { Component } from 'react'

class Rsvps extends Component {
    componentDidMount = () => {
     const id =  this.props.match.params.id;
      this.props.showReservations(id)
    }
    
  render() {
      const {guests} = this.props;
    return (
      <ReservationsDisplayPage guests={guests}/>
    )
  }
}


const mapStateToProps = state =>({
    guests:state.guests
})

const mapDispatchToProps = dispatch =>({
    showReservations: (id)=>dispatch(showReservations(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Rsvps)