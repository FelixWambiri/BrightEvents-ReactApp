import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import eventHolder from '../assets/events.png';

const hdate = require('human-date');

export default (props) => {
  const { event, onDelete, showReservations } = props;
  function handleDelete(id) {
    onDelete(id);
  }
  function handleShowReservations(id) {
    showReservations(id);
  }
  return (
    <Card>
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
        <div className="extra content">
          <a>
            <Link to={`/event/${event.id}/rsvp`}><i className="favorite icon" />Attendees</Link>
          </a>
          <hr />
          <div className="ui fluid buttons">
            <Link to={`/events/edit/${event.id}`} className="ui primary icon button"> <i className="edit icon" /> Edit</Link>
            <div className="or" />
            <button onClick={() => handleDelete(event.id)} className="ui red button"><i className="trash icon" /> Delete</button>
          </div>
        </div>
      </Card.Content>
    </Card>

  );
};

