import React from 'react';
import { Table, Message } from 'semantic-ui-react';

const ReservationsDisplayPage = ({ showReservations, guests }) => {
  if (guests && guests.length <= 0) {
    return (<Message warning>
      <Message.Header>No guests for this event so far</Message.Header>
            </Message>);
  }
  return (
    <Table columns={2}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Email Address</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {

            guests.map(guest => (<Table.Row>
              <Table.Cell>{guest.username}</Table.Cell>
              <Table.Cell>{guest.email}</Table.Cell>
                                 </Table.Row>))

        }
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>{guests.length} Guest(s)</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Footer>
    </Table>

  );
};

export default ReservationsDisplayPage;

