import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';
import setAuthorisationHeader from './utils/setAuthorisationHeader';
import logger from './middlewares/logger';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

// To bring about persistency when a user is logged in and the homepage displays the logout button but when the user reloads that page login button is displayed
// This helps avoid that by dispatching the userLoggedIn function
if (localStorage.brighteventstoken) {
  const user = { token: localStorage.brighteventstoken };
  setAuthorisationHeader(localStorage.brighteventstoken);
  store.dispatch(userLoggedIn(user));
}
// We use route to wrap app so as to render app component and pass history and location to it
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
