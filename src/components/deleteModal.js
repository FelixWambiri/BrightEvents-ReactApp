import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const DeleteModal = ({
 isOpen, toggleModal, id, handleDelete, event 
}) => {
  console.log('the evnet is ', event);
  return (
      <Modal
          open={isOpen}
          onClose={() => toggleModal()}
          closeIcon
        >
          <Header icon="trash" content="Delete" />
          <Modal.Content>
            <p>
              Are you sure you want to proceed to delete the event?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={() => { toggleModal(); }}>
              <Icon name="remove" /> No
            </Button>
            <Button color="green" onClick={() => { toggleModal(); handleDelete(); }}>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
  );
};

export default DeleteModal;

