import React from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { black } from 'material-ui/styles/colors';

const AddEventsCtA = () => (
  <Grid centered>
    <Grid.Column width={4}>
      <Link to="/events/new">
        <Icon name="plus circle" size="massive" color="black" />
      </Link>
    </Grid.Column>
  </Grid>

);
export default AddEventsCtA;
