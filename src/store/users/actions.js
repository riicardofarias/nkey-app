import userApi from '../../api/apiUser';
import * as userTypes from './actionTypes';
import { success, error } from '../alerts/actions';

export const register = (user) => {
    return function(dispatch) {
        dispatch({ type: userTypes.USER_REGISTER_REQUEST })

        userApi.register(user).then(({ data }) => {
            dispatch(success('Usuário registrado com sucesso.'))
            dispatch({ type: userTypes.USER_REGISTER_SUCCESS, user: data })
        }).catch((e) => {
            dispatch(error(e.response.data.message))
            dispatch({ type: userTypes.USER_REGISTER_ERROR })
        })
    }
}