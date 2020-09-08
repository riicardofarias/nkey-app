import * as actionTypes from './actionTypes';

const user = JSON.parse(localStorage.getItem('user')) || {};
const token = localStorage.getItem('token');

const inititalState = {
    user: user,
    errors: [],
    isLoggedIn: token ? true : false
}

export default (state = inititalState, action) => {
    switch(action.type){
        case actionTypes.AUTH_REQUEST: 
            return { ...state, isLoading: true }

        case actionTypes.AUTH_SUCCESS: 
            return { ...state, user: action.user, isLoggedIn: true, isLoading: false }

        case actionTypes.AUTH_ERROR: 
            return { ...state, isLoading: false, errors: action.errors }

        case actionTypes.AUTH_LOGOUT: 
            return { ...state, isLoggedIn: false }

        default: 
            return state;
    }
}