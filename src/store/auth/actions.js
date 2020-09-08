import userApi from '../../api/apiUser';
import * as actionTypes from './actionTypes';
import { success, error } from '../alerts/actions';

export const login = (email, password) => {
    return function (dispatch) {
        dispatch({ type: actionTypes.AUTH_REQUEST })
        
        userApi.login({ email, password }).then(({ data }) => {
            const { token, user } = data;

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            
            dispatch(success(`Bem-vindo ${ user.name }`))
            dispatch({ type: actionTypes.AUTH_SUCCESS, user: user })
        }).catch((e) => {
            dispatch(error(e.response.data.message))
            dispatch({ type: actionTypes.AUTH_ERROR })
        })
    }
}

export const logout = () => {
    return function (dispatch) {
        localStorage.clear();
        dispatch({ type: actionTypes.AUTH_LOGOUT })
    }
}