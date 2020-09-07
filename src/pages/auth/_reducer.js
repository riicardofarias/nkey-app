const user = JSON.parse(localStorage.getItem('user')) || {};
const token = localStorage.getItem('token')

const inititalState = {
    user: user,
    isLoggedIn: token ? true : false
}

export default (state = inititalState, action) => {
    switch(action.type){
        case 'AUTH_REQUEST': {
            return {
                ...state,
                isLoading: true
            }
        }

        case 'AUTH_SUCCESS': {
            return {
                ...state,
                user: action.user,
                isLoggedIn: true,
                isLoading: false
            }
        }

        case 'AUTH_ERROR': {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }

        default: {
            return state;
        }
    }
}