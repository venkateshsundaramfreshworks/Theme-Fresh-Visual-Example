import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import App from 'scenes/components/Messages';
import Login from 'scenes/components/Login';

import { store, history } from './services';

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route
                path="/"
                component={Login}
                />
            <Route path="message" component={App} />
        </Router>
    </Provider>
);

export default Root;