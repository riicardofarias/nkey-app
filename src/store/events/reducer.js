import * as actionTypes from './actionTypes';

const inititalState = {
    events: [],
    event: {}
}

export default (state = inititalState, action) => {
    switch(action.type){
        case actionTypes.EVENT_FETCH_ALL: 
            return { ...state, events: action.events, error: action.error };
        case actionTypes.EVENT_FETCH_ONE: 
            return { ...state, event: action.event };
        case actionTypes.EVENT_ADD: 
            return { ...state, event: action.event, isLoading: action.isLoading };
        case actionTypes.EVENT_UPDATE: 
            return { ...state, event: action.event, isLoading: action.isLoading };
        case actionTypes.EVENT_DELETE: 
            return { ...state, event: {}, isLoading: action.isLoading };
        default: 
            return state;
    }
}