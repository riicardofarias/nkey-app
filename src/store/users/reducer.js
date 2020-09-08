import * as actionTypes from './actionTypes';

const inititalState = {
    user: {},
    isLoading: false,
    isSuccess: false
}

export default (state = inititalState, action) => {
    switch(action.type){
        case actionTypes.USER_REGISTER_REQUEST: 
            return { ...state, isLoading: true };
        case actionTypes.USER_REGISTER_SUCCESS: 
            return { ...state, user: action.user, isLoading: false, isSuccess: true };
        case actionTypes.USER_REGISTER_ERROR: 
            return { ...state, isLoading: false, isSuccess: false };
        default: 
            return state;
    }
}