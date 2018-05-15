import * as types from './actionTypes';
import axios from 'axios';

export const getMessageData = () => dispatch => axios
    .get('http://localhost:3004/messageData')
    .then(({ data }) => {
        dispatch({
            type: types.FETCH_MESSAGE_DATA,
            data,
        });
    })
    .catch(error => {
        console.log(error)        
    });

