import api from '../../services/api'

export const signIn = (email, password) => {
    return function (dispatch) {
        const data = {
            'email': email,
            'senha': password
        }

        dispatch({ type: 'AUTH_REQUEST' })
        
        api.post('/users/login', data).then(({ data }) => {
            const { token, usuario } = data;

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(usuario))
            
            dispatch({ type: 'AUTH_SUCCESS', user: usuario })
        }).catch((e) => 
            dispatch({ type: 'AUTH_ERROR' })
        )
    }
}