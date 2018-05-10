import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';

import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';

import messages from './messages/reducer';


const rootReducer = combineReducers({
    messages,
    routing: routerReducer,
});

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk, routerMiddleware(browserHistory))
);

export const history = syncHistoryWithStore(browserHistory, store);
