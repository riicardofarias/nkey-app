import api from './api'

export default {
    login(data){
        return api.post('/users/login', data)
    },

    register(user){
        return api.post('/users/register', user)
    }
}