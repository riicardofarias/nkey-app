import * as actionTypes from './actionTypes';

const inititalState = {
    events: [],
    event: null
}

export default (state = inititalState, action) => {
    switch(action.type){
        case actionTypes.EVENT_FETCH_ALL: 
            return { ...state, events: action.events, error: action.error };
        case actionTypes.EVENT_FETCH_ONE: 
            return { ...state, event: action.event };
        case actionTypes.EVENT_ADD: 
            return { ...state, event: {}, isLoading: action.isLoading };
        case actionTypes.EVENT_UPDATE: 
            return { ...state, event: action.event, isLoading: action.isLoading };
        case actionTypes.EVENT_DELETE:
            return { ...state, events: state.events.filter(e => e.id !== action.event?.id), isLoading: action.isLoading };
        default: 
            return state;
    }
}