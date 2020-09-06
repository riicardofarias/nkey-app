const inititalState = {
    user: {}
}

export default (state = inititalState, action) => {
    switch(action.type){
        case 'SIGN_IN': {
            return {
                ...state,
                user: action.user,
                loading: false,
                errors: []
            }
        }

        default: {
            return state;
        }
    }
}