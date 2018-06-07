import React from 'react';
import { Modal } from 'semantic-ui-react';

const ModalExampleShorthand = () => (
  <Modal
    trigger={<a><i className="favorite icon" />RSVP</a>}
    header="Reminder!"
    content="Call Benjamin regarding the reports."
    // actions={[
    //   'Snooze',
    //   { key: 'done', content: 'Done', positive: true },
    // ]}
  />
);

export default ModalExampleShorthand;
