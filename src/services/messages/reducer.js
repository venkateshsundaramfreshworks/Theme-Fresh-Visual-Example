import * as types from './actionTypes';
import initialState from './initialState';

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MESSAGE_DATA:
            return Object.assign({}, state, {
                messageData: action.data,
            });
        default:
            return state;
    }
};

export default messageReducer;
