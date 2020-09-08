import * as alertTypes from './alertTypes';

const inititalState = {
    type: 'default',
    message: null
}

export default (state = inititalState, action) => {
    switch(action.type){
        case alertTypes.ALERT_SUCCESS: 
            return { ...state, message: action.message, type: 'success' };
        case alertTypes.ALERT_ERROR: 
            return { ...state, message: action.message, type: 'error' };
        default: 
            return state;
    }
}