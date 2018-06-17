import React from 'react';
import { Link } from 'react-router-dom';
import { makeReservation } from '../actions/events';
import { Card, Icon, Button } from 'semantic-ui-react';
import eventHolder from '../assets/events.png';

const hdate = require('human-date');

let rsvpError;
export default (props) => {
  const {
    event, onDelete, user, makeReservation, error, showError
  } = props;
  const loggedin = !!localStorage.getItem('brighteventstoken');
  function handleDelete(id) {
    onDelete(id);
  }
  const makeRSVP = (id) => {
    makeReservation(id).catch((error) => {
      showError(error.response.data.warning);
    });
  };
  function checkAuth(id) {
    if (loggedin) {
      return (<button className="ui button" onClick={() => makeRSVP(id)}>
        <i className="favorite icon" />Attend
      </button>);
    }
    return (
      <Button circular icon="lock icon" as={Link} to="/login">Login to RSVP</Button>);
  }
  return (
    <Card >

      <img src={eventHolder} />
      <Card.Content>
        <Card.Header>
          {event.name}
        </Card.Header>
        <Card.Meta>
          <span className="date">
            {event.category}
          </span>
        </Card.Meta>
        <Card.Meta>
          <span className="date">
            {event.location}
          </span>
        </Card.Meta>
        <Card.Description>
          {event.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="calendar" />
          {hdate.relativeTime(event.date_hosted)}
        </a>
      </Card.Content>
      <Card.Content extra>
        {checkAuth(event.id)}

      </Card.Content>
    </Card>
  );
};
