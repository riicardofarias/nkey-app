import api from '../../services/api'

export const getEvents = () => {
    return function (dispatch) {
        api.get('/events').then(({ data }) => {
            dispatch({ type: 'FETCH_EVENTS', events: data })
        })
    }
}