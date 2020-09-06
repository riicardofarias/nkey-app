import api from '../../services/api'

export const authActions = {
    signIn
}

function signIn() {
    api.post('/users/login', {
        'email': 'riicardofarias@gmail.com',
        'senha': '123'
    })

    return {
        type: 'SIGN_IN',
        user: {}
    }
}