import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Messsages from 'scenes/components/Messages';
import Login from 'scenes/components/Login';
import { theming } from 'constants/theme';
import { mode } from 'constants/appConstants';

import { store, history } from './services';

const Root = () => {
    const theme = theming(mode);
    return(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Route
                    path="/"
                    component={Login}/>
                <Route path="message" component={Messsages} />
            </Router>
        </ThemeProvider>
    </Provider>
);
}

export default Root;