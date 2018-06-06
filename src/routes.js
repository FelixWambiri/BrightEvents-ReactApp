import React from 'react';
import { Route, Switch } from 'react-router'

import App from './App';
import Register from './components/RegistrationPage';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/register' component={Register} />
    </Switch>
    ) 

export default Routes;