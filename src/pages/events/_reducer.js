import types from '../../store/types'

const inititalState = {
    events: []
}

export default (state = inititalState, action) => {
    switch(action.type){
        case 'FETCH_EVENTS': {
            return {
                ...state,
                events: action.events
            }
        }

        default: {
            return state
        }
    }
}