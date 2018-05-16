import React from 'react';
import { Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const AddEventsCtA = () => (
            <Link to="/events/new">
                <Icon name="plus circle" size="massive"/>
            </Link>
);
export default AddEventsCtA;